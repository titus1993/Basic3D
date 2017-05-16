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

    this.setPos = function (pos) {
        if (this.Rol == "declaracion") {
            this.Pos = position;
            position++;
        }

        for (var i = 0; i < this.Hijos.length;i++){
            this.Hijos[i].setPos(position);
        }        
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