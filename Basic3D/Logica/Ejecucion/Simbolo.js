var position = 0;

function Simbolo(tipo, nombre, rol, pos, size, fila, columna, hijos, valor) {
    this.Tipo = tipo;
    this.Nombre = nombre;
    this.Rol = rol;
    this.Pos = pos;
    this.Size = size;
    this.Fila = fila;
    this.Columna = columna;
    this.Hijos = hijos;
    this.Valor = valor;
    this.Padre = null;
    this.Siguiente = null;

    this.setPos = function (pos) {
        if (this.Rol == "declaracion" || this.Rol == "declaracionarreglo") {
            this.Pos = position;
            position++;
        }

        if (this.Rol != "element"){ 
            for (var i = 0; i < this.Hijos.length; i++) {
                this.Hijos[i].setPos(position);
            }
        }
    };     
    

    this.Ejecutar3D = function () {
        switch (this.Rol) {
            case "if":
                {
                    var condicion = this.Valor.Condicion.Ejecutar3D();
                    if (ContarErrores()) {
                        if (condicion.Tipo == "num") {
                            if (condicion.Numero == 1) {
                                this.EjecutarSalto(this.Valor.Cuerpo);
                                return true;
                            } else {
                                return false;
                            }
                        } else {
                            insertarError("Sintactico", "Se esperaba un valor Numerico", this.Fila, this.Columna);
                        }
                    }
                    break;
                }
            case "goto":
                {
                    this.EjecutarSalto(this.Valor);
                    break;
                }
            case "if":
                {
                    break;
                }
            case "if":
                {
                    break;
                }
        }
    };

    this.EjecutarSalto = function (nombre) {
        var estado = false;
        for (var i = 0; i < this.Padre.Hijos.length; i++) {

            var hijo = this.Padre.Hijos[i];
            if (estado) {
                if (hijo.Rol == "etq" || "asignacion" || "llamada") {
                    if (hijo.Rol == "asignacion") {
                        hijo.Valor.Ejecutar3D();
                    }
                } else {
                    if (hijo.Rol = "if") {
                        var resultado = hijo.Ejecutar3D();
                        if (resultado) {
                            break;
                        }
                    } else if ("goto") {
                        hijo.Ejecutar3D();
                        break;
                    }
                }
            } else {
                if (hijo.Rol == "etq") {
                    if (hijo.Valor == nombre) {
                        estado = true;                        
                    }
                }
            }
        }
        if (!estado) {
            insertarError("Sintactico", "No se encontro la etiqueta " + nombre, this.Fila, this.Columna);
        }
        return estado;
    };
}

function setPosGlobal(simbolos) {
    for (var i = 0; i < simbolos.length; i++){
        if (simbolos[i].Rol == "declaracion") {
            simbolos[i].Pos = position;
            position++;
        }
    }
    position = 0;
}