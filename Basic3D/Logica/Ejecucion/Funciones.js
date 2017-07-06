function Asignacion2D() {

}

var Null = -987654321.123456789;

function Nodo3D() {
    this.Valor = "";
    this.Codigo = "";
    this.V = "";
    this.F = "";
    this.Tipo = "";
}

function FNodoExpresion() {
    
    this.Izquierda = null;
    this.Derecha = null;
    this.Tipo = null;
    this.Nombre = null;
    this.Fila = null;
    this.Columna = null;
    this.Numero = null;
    this.Cadena = null;
    this.Bool = null;
    this.Element = null;
    this.Objeto = null;

    this.Ejecutar3D = function () {
        var nodo = new FNodoExpresion();
        switch (this.Tipo) {
            case "num":
                nodo.IniciarNodo(null, null, "num", "num", 0, 0, parseFloat(this.Numero));
                break;   

            case "temp":
                var variable = BuscarVariable(this.Nombre);
                if (variable != null){
                    nodo.IniciarNodo(null, null, "num", "num", 0, 0, variable.Valor);
                } else {
                    insertarError("Sintacico", "No se encontro el temporal " + this.Nombre, this.Fila, this.Columna);
                }
                break;

            case "s":
                nodo.IniciarNodo(null, null, "num", "num", 0, 0, S);
                break;

            case "h":
                nodo.IniciarNodo(null, null, "num", "num", 0, 0, H);
                break;

            case "p":
                nodo.IniciarNodo(null, null, "num", "num", 0, 0, P);
                break;

            case "heap":
                var pos = this.Valor.Ejecutar3D();

                if (ContarErrores()){
                    if (pos.Tipo == "num") {
                        if (pos.Numero >= 0) {
                            nodo.IniciarNodo(null, null, "num", "num", 0, 0, pos.Numero);
                        } else {
                            insertarError("Sintactico", "Posicion fuera de rango en el heap", this.Fila, this.Columna);
                        }
                    } else {
                        insertarError("Sintactico", "No es un numero", this.Fila, this.Columna);
                    }
                }
                
                break;

            case "stack":
                var pos = this.Valor.Ejecutar3D();

                if (ContarErrores()) {
                    if (pos.Tipo == "num") {
                        if (pos.Numero >= 0 ) {
                            nodo.IniciarNodo(null, null, "num", "num", 0, 0, pos.Numero);
                        } else {
                            insertarError("Sintactico", "Posicion fuera de rango en el heap", this.Fila, this.Columna);
                        }
                    } else {
                        insertarError("Sintactico", "No es un numero", this.Fila, this.Columna);
                    }
                }
                break;

            case "pool":
                var pos = this.Valor.Ejecutar3D();

                if (ContarErrores()) {
                    if (pos.Tipo == "num") {
                        if (pos.Numero >= 0 ) {
                            nodo.IniciarNodo(null, null, "num", "num", 0, 0, pos.Numero);
                        } else {
                            insertarError("Sintactico", "Posicion fuera de rango en el heap", this.Fila, this.Columna);
                        }
                    } else {
                        insertarError("Sintactico", "No es un numero", this.Fila, this.Columna);
                    }
                }
                break;

            case "+":
                nodo = this.EjecutarSuma(this.Izquierda, this.Derecha);
                break;

            case "-":
                nodo = this.EjecutarResta(this.Izquierda, this.Derecha);
                break;

            case "*":
                nodo = this.EjecutarMultiplicacion(this.Izquierda, this.Derecha);
                break;

            case "/":
                nodo = this.EjecutarDivision(this.Izquierda, this.Derecha);
                break;

            case "%":
                nodo = this.EjecutarModulo(this.Izquierda, this.Derecha);
                break;

            case "^":
                nodo = this.EjecutarPotencia(this.Izquierda, this.Derecha);
                break;

            case "==":
                nodo = this.EjecutarIgualacion(this.Izquierda, this.Derecha);
                break;

            case "!=":
                nodo = this.EjecutarDiferente(this.Izquierda, this.Derecha);
                break;

            case ">":
                nodo = this.EjecutarMayor(this.Izquierda, this.Derecha);
                break;

            case ">=":
                nodo = this.EjecutarMayorIgual(this.Izquierda, this.Derecha);
                break;

            case "<":
                nodo = this.EjecutarMenor(this.Izquierda, this.Derecha);
                break;

            case "<=":
                nodo = this.EjecutarMenorIgual(this.Izquierda, this.Derecha);
                break;


        }
        return nodo;
    }

    this.EjecutarSuma = function (izq, der) {
        var nodo = new FNodoExpresion();
        var auxizq = izq.Ejecutar3D();
        var auxder = der.Ejecutar3D();

        if (ContarErrores()){
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                nodo = auxizq;
                nodo.Numero = auxizq.Numero + auxder.Numero;
            } else {
                insertarError("Sintactico", "No se pudo realizar la +", this.Fila, this.Columna);
            }
        }

        return nodo;
    }

    this.EjecutarResta = function (izq, der) {
        var nodo = new FNodoExpresion();
        if (izq != null){
            var auxizq = izq.Ejecutar3D();
            var auxder = der.Ejecutar3D();

            if (ContarErrores()) {
                if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                    nodo = auxizq;
                    nodo.Numero = auxizq.Numero - auxder.Numero;
                } else {
                    insertarError("Sintactico", "No se pudo realizar la -", this.Fila, this.Columna);
                }
            }
        } else {
            var auxder = der.Ejecutar3D();

            if (ContarErrores()) {
                if (auxder.Tipo == "num") {
                    nodo = auxder;
                    nodo.Numero = -1 * auxder.Numero;
                } else {
                    insertarError("Sintactico", "No se pudo realizar la -", this.Fila, this.Columna);
                }
            }
        }        

        return nodo;
    }

    this.EjecutarMultiplicacion = function (izq, der) {
        var nodo = new FNodoExpresion();
        var auxizq = izq.Ejecutar3D();
        var auxder = der.Ejecutar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                nodo = auxizq;
                nodo.Numero = auxizq.Numero * auxder.Numero;
            } else {
                insertarError("Sintactico", "No se pudo realizar la *", this.Fila, this.Columna);
            }
        }

        return nodo;
    }

    this.EjecutarDivision = function (izq, der) {
        var nodo = new FNodoExpresion();
        var auxizq = izq.Ejecutar3D();
        var auxder = der.Ejecutar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                nodo = auxizq;
                nodo.Numero = auxizq.Numero / auxder.Numero;
            } else {
                insertarError("Sintactico", "No se pudo realizar la /", this.Fila, this.Columna);
            }
        }

        return nodo;
    }

    this.EjecutarModulo = function (izq, der) {
        var nodo = new FNodoExpresion();
        var auxizq = izq.Ejecutar3D();
        var auxder = der.Ejecutar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                nodo = auxizq;
                nodo.Numero = auxizq.Numero % auxder.Numero;
            } else {
                insertarError("Sintactico", "No se pudo realizar la %", this.Fila, this.Columna);
            }
        }

        return nodo;
    }

    this.EjecutarPotencia = function (izq, der) {
        var nodo = new FNodoExpresion();
        var auxizq = izq.Ejecutar3D();
        var auxder = der.Ejecutar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                nodo = auxizq;
                nodo.Numero = Math.pow(auxizq.Numero, auxder.Numero);
            } else {
                insertarError("Sintactico", "No se pudo realizar la %", this.Fila, this.Columna);
            }
        }

        return nodo;
    }

    this.EjecutarIgualacion = function (izq, der) {
        var nodo = new FNodoExpresion();
        var auxizq = izq.Ejecutar3D();
        var auxder = der.Ejecutar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                nodo = auxizq;
                if (auxizq.Numero == auxder.Numero){
                    nodo.Numero = 1;
                } else {
                    nodo.Numero = 0;
                }
            } else {
                insertarError("Sintactico", "No se pudo realizar la ==", this.Fila, this.Columna);
            }
        }

        return nodo;
    }

    this.EjecutarDiferente = function (izq, der) {
        var nodo = new FNodoExpresion();
        var auxizq = izq.Ejecutar3D();
        var auxder = der.Ejecutar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                nodo = auxizq;
                if (auxizq.Numero != auxder.Numero) {
                    nodo.Numero = 1;
                } else {
                    nodo.Numero = 0;
                }
            } else {
                insertarError("Sintactico", "No se pudo realizar la !=", this.Fila, this.Columna);
            }
        }

        return nodo;
    }

    this.EjecutarMayor = function (izq, der) {
        var nodo = new FNodoExpresion();
        var auxizq = izq.Ejecutar3D();
        var auxder = der.Ejecutar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                nodo = auxizq;
                if (auxizq.Numero > auxder.Numero) {
                    nodo.Numero = 1;
                } else {
                    nodo.Numero = 0;
                }
            } else {
                insertarError("Sintactico", "No se pudo realizar la >=", this.Fila, this.Columna);
            }
        }

        return nodo;
    }

    this.EjecutarMayorIgual = function (izq, der) {
        var nodo = new FNodoExpresion();
        var auxizq = izq.Ejecutar3D();
        var auxder = der.Ejecutar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                nodo = auxizq;
                if (auxizq.Numero >= auxder.Numero) {
                    nodo.Numero = 1;
                } else {
                    nodo.Numero = 0;
                }
            } else {
                insertarError("Sintactico", "No se pudo realizar la >=", this.Fila, this.Columna);
            }
        }

        return nodo;
    }

    this.EjecutarMenor = function (izq, der) {
        var nodo = new FNodoExpresion();
        var auxizq = izq.Ejecutar3D();
        var auxder = der.Ejecutar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                nodo = auxizq;
                if (auxizq.Numero < auxder.Numero) {
                    nodo.Numero = 1;
                } else {
                    nodo.Numero = 0;
                }
            } else {
                insertarError("Sintactico", "No se pudo realizar la <", this.Fila, this.Columna);
            }
        }

        return nodo;
    }

    this.EjecutarMenorIgual = function (izq, der) {
        var nodo = new FNodoExpresion();
        var auxizq = izq.Ejecutar3D();
        var auxder = der.Ejecutar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                nodo = auxizq;
                if (auxizq.Numero <= auxder.Numero) {
                    nodo.Numero = 1;
                } else {
                    nodo.Numero = 0;
                }
            } else {
                insertarError("Sintactico", "No se pudo realizar la <=", this.Fila, this.Columna);
            }
        }

        return nodo;
    }

    this.IniciarNodo = function (izq, der, tipo, nombre, fila, columna, valor) {
        this.Izquierda = izq;
        this.Derecha = der;
        this.Tipo = tipo;
        this.Nombre = nombre;
        this.Fila = fila;
        this.Columna = columna;

        switch (this.Tipo) {
            case "num":
                this.Numero = parseFloat(valor);
                break;

            case "str":
                this.Cadena = valor;
                break;

            case "bool":
                if (valor == true){
                    this.Bool = true;
                } else {
                    this.Bool = false;
                }
                break;

            case "null":
                this.valor = null;
                break;

            case "element":
                this.Element = valor;
                break;

            case "obj":
                this.Objeto = valor;
                break;

            case "heap":
                this.Valor = valor;
                break;

            case "pool":
                this.Valor = valor;
                break;

            case "stack":
                this.Valor = valor;
                break;
        }
    }; 

    this.Generar3D = function () {        
        var codigo3d = this.Generar3D2(this);
        return codigo3d;
    };

    this.Generar3D2 = function (nodo) {
        var codigo3d = new Nodo3D();

        switch (nodo.Tipo){
            case "num":
                var cad = "";
                codigo3d.Valor = getTemp();//obtenemos el temporal
                cad = cad + "\t" +codigo3d.Valor + " = " + nodo.Numero.toString() + ";\n";//asignamos el valor al temporal
                codigo3d.Codigo = cad;//asignamos la cadena al nodo de retorno
                codigo3d.Tipo = nodo.Tipo;//asignamos el tipo de dato
                
                break;

            case "str":
                var cad = "";
                codigo3d.Valor = getTemp();//obtenemos el temporal
                cad += "\t" + codigo3d.Valor + " = H;\n";//obtenemos el valor del heap donde guardaremos la cadena
                cad += "\t" + "H = H + 1;\n";// aumentamos el apuntador de heap para su siguiente uso
                cad += "\t" + "Heap[" + codigo3d.Valor + "] = S;\n";// asignamos al heap la posicion del pool string

                for (var i = 0; i < nodo.Cadena.length; i++){
                    cad += "\t" + "Pool[S] = " + nodo.Cadena.charCodeAt(i).toString() + ";\n";//asignamos el valor de cada caracter al temporal
                    cad += "\t" + "S = S + 1;\n";//asignamos la siguiente posicion del pool
                }
                cad += "\t" + "Pool[S] = " + ("\0").charCodeAt(0).toString() +";\n";
                cad += "\t" + "S = S + 1;\n"
                codigo3d.Codigo = cad;//asignamos la cadena al nodo de retorno
                codigo3d.Tipo = nodo.Tipo;//asignamos el tipo de dato
                break;

            case "bool":
                var cad = "";
                codigo3d.Valor = getTemp();//obtenemos el temporal
                
                codigo3d.Tipo = nodo.Tipo;//asignamos el tipo de dato
                if (nodo.Bool){
                    cad = cad + "\t" + codigo3d.Valor + " = 1;\n";
                } else {
                    cad = cad + "\t" + codigo3d.Valor + " = 0;\n";
                }                
                codigo3d.Codigo = cad;
                codigo3d.Tipo = nodo.Tipo;
                break;

            case "null":
                var cad = "";
                codigo3d.Valor = getTemp();//obtenemos el temporal
                cad = cad + "\t" + codigo3d.Valor + " = " + Null.toString() + ";\n";//asignamos el valor al temporal
                codigo3d.Codigo = cad;//asignamos la cadena al nodo de retorno
                codigo3d.Tipo = nodo.Tipo;//asignamos el tipo de dato

                break;

            case "temp":
                break;

            case "+":
                codigo3d = this.ResolverSuma(nodo.Izquierda, nodo.Derecha);
                break;

            case "-":
                codigo3d = this.ResolverResta(nodo.Izquierda, nodo.Derecha);
                break;

            case "*":
                codigo3d = this.ResolverMultiplicacion(nodo.Izquierda, nodo.Derecha);
                break;

            case "/":
                codigo3d = this.ResolverDivision(nodo.Izquierda, nodo.Derecha);
                break;

            case "%":
                codigo3d = this.ResolverModulo(nodo.Izquierda, nodo.Derecha);
                break;

            case "^":
                codigo3d = this.ResolverPotencia(nodo.Izquierda, nodo.Derecha);
                break;

            case "==":
                codigo3d = this.ResolverIgualacion(nodo.Izquierda, nodo.Derecha);
                break;

            case "!=":
                codigo3d = this.ResolverDiferenciacion(nodo.Izquierda, nodo.Derecha);
                break;

            case ">":
                codigo3d = this.ResolverMayor(nodo.Izquierda, nodo.Derecha);
                break;

            case "<":
                codigo3d = this.ResolverMenor(nodo.Izquierda, nodo.Derecha);
                break;

            case "<=":
                codigo3d = this.ResolverMenorIgual(nodo.Izquierda, nodo.Derecha);
                break;

            case ">=":
                codigo3d = this.ResolverMayorIgual(nodo.Izquierda, nodo.Derecha);
                break;

            case "||":
                codigo3d = this.ResolverOr(nodo.Izquierda, nodo.Derecha);
                break;

            case "|?":
                codigo3d = this.ResolverNor(nodo.Izquierda, nodo.Derecha);
                break;

            case "&&":
                codigo3d = this.ResolverAnd(nodo.Izquierda, nodo.Derecha);
                break;

            case "&?":
                codigo3d = this.ResolverNand(nodo.Izquierda, nodo.Derecha);
                break;

            case "|&":
                codigo3d = this.ResolverXor(nodo.Izquierda, nodo.Derecha);
                break;

            case "!":
                codigo3d = this.ResolverNot(nodo.Derecha);
                break;


        }

        return codigo3d;
    };

    this.ResolverSuma = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num"){
                if (auxder.Tipo == "num"){
                    var cad = "";
                    codigo3d.Valor = getTemp();
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " + " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool"){
                    if (auxder.V == "" && auxder.F == ""){//si trae etiquetas viene de una relacional si no es un bool nativo
                        var cad = "";
                        codigo3d.Valor = getTemp();
                        cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " + " + auxder.Valor + ";\n";
                        codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                        codigo3d.Tipo = "num";
                    } else {
                        var cad = "";

                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += "\t" + auxder.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxder.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        codigo3d.Valor = getTemp();
                        cad += "\t" + codigo3d.Valor + " = " + auxizq.Valor + " + " + auxtemp + ";\n";
                        codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                        codigo3d.Tipo = "num";
                    }
                    
                } else if (auxder.Tipo == "str"){
                    var cad = "";
                    codigo3d.Valor = getTemp();//obtenemos el temporal
                    cad += "\t" + codigo3d.Valor + " = H;\n";//obtenemos el valor del heap donde guardaremos la concatenacion
                    cad += "\t" + "H = H + 1;\n";// aumentamos el apuntador de heap para su siguiente uso
                    cad += "\t" + "Heap[" + codigo3d.Valor + "] = S;\n";// asignamos al heap la posicion del pool string

                    //uevo
                    cad += "\t" + "Pool[S] = -1;\n"; //asignamos bandera que es numero
                    cad += "\t" + "S = S + 1;\n";//aumentamos el puntero de S
                    cad += "\t" + "Pool[S] = " + auxizq.Valor + ";\n";//pasamos el valor del temporal al SP
                    cad += "\t" + "S = S + 1;\n";//aumentamos el puntero
                    cad += "\t" + "Pool[S] = -2;\n";//indicamos que terminan los numero
                    cad += "\t" + "S = S + 1;\n";//aumento del puntero

                    var auxpool = getTemp();

                    var auxetqif = getEtq();
                    var auxetqifsalida = getEtq();

                    var auxpool2 = getTemp();

                    cad += "\t" + auxpool + " = " + "Heap[" + auxder.Valor + "];\n";
                    cad += "\t" + auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" + auxetqif + ":\n";
                    cad += "\t" + "if (" + auxpool2 + " == 0) goto " + auxetqifsalida + ";\n";
                    cad += "\t" + "Pool[S] = " + auxpool2 + ";\n";//asignamos el valor de cada caracter al temporal
                    cad += "\t" + "S = S + 1;\n";//asignamos la siguiente posicion del pool
                    cad += "\t" + auxpool + " = " + auxpool + " + 1;\n";//obtenemos el nuevo valor del heap
                    cad += "\t" + auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" + "goto " + auxetqif + ";\n";// salto para volver a evaluar el pool
                    cad += "\t" + auxetqifsalida + ":\n";//etq de salida por si el if es verdadero
                    cad += "\t" + "Pool[S] = 0;\n";
                    cad += "\t" + "S = S + 1;\n";
                    
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;//asignamos la cadena al nodo de retorno
                    codigo3d.Tipo = "str";//asignamos el tipo de dato
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " + " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else if (auxizq.Tipo == "bool") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    if (auxizq.V == "" && auxizq.F == "") {
                        cad += auxizq.Codigo;                        
                    } else {
                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += auxizq.Codigo;
                        cad += "\t" + auxizq.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxizq.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        auxizq.Valor = auxtemp;
                    }                    
                    codigo3d.Valor = getTemp();
                    cad += auxder.Codigo;
                    cad += "\t" + codigo3d.Valor + " = " + auxizq.Valor + " + " + auxder.Valor + ";\n";
                    codigo3d.Codigo = cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    var cad = "";

                    if (auxizq.V == "" && auxizq.F == "") {
                        cad += auxizq.Codigo;
                    } else {
                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += auxizq.Codigo;
                        cad += "\t" + auxizq.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxizq.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        auxizq.Valor = auxtemp;
                    }
                    if (auxder.V == "" && auxder.F == "") {
                        cad += auxder.Codigo;
                    } else {
                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += auxder.Codigo;
                        cad += "\t" + auxder.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxder.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        auxder.Valor = auxtemp;
                    }
                    codigo3d.Valor = getTemp();
                    cad += "\t" + codigo3d.Valor + " = " + auxizq.Valor + " + " + auxder.Valor + ";\n";
                    codigo3d.Codigo = cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "str") {
                    var cad = "";
                    if (auxizq.V == "" && auxizq.F == "") {
                        cad += auxizq.Codigo;
                    } else {
                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += auxizq.Codigo;
                        cad += "\t" + auxizq.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxizq.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        auxizq.Valor = auxtemp;
                    }               

                    cad += auxder.Codigo;

                    codigo3d.Valor = getTemp();//obtenemos el temporal

                    cad += "\t" + codigo3d.Valor + " = H;\n";//obtenemos el valor del heap donde guardaremos la concatenacion
                    cad += "\t" + "H = H + 1;\n";// aumentamos el apuntador de heap para su siguiente uso
                    cad += "\t" + "Heap[" + codigo3d.Valor + "] = S;\n";// asignamos al heap la posicion del pool string

                    //bool
                    cad += "\t" + "Pool[S] = -1;\n"; //asignamos bandera que es numero
                    cad += "\t" + "S = S + 1;\n";//aumentamos el puntero de S
                    cad += "\t" + "Pool[S] = " + auxizq.Valor + ";\n";//pasamos el valor del temporal al SP
                    cad += "\t" + "S = S + 1;\n";//aumentamos el puntero
                    cad += "\t" + "Pool[S] = -2;\n";//indicamos que terminan los numero
                    cad += "\t" + "S = S + 1;\n";//aumento del puntero
                    //cadena
                    var auxpool = getTemp();

                    var auxetqif = getEtq();
                    var auxetqifsalida = getEtq();

                    var auxpool2 = getTemp();

                    cad += "\t" + auxpool + " = " + "Heap[" + auxder.Valor + "];\n";
                    cad += "\t" + auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" + auxetqif + ":\n";
                    cad += "\t" + "if (" + auxpool2 + " == 0) goto " + auxetqifsalida + ";\n";
                    cad += "\t" + "Pool[S] = " + auxpool2 + ";\n";//asignamos el valor de cada caracter al temporal
                    cad += "\t" + "S = S + 1;\n";//asignamos la siguiente posicion del pool
                    cad += "\t" + auxpool + " = " + auxpool + " + 1;\n";//obtenemos el nuevo valor del heap
                    cad += "\t" + auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" + "goto " + auxetqif + ";\n";// salto para volver a evaluar el pool
                    cad += "\t" + auxetqifsalida + ":\n";//etq de salida por si el if es verdadero
                    cad += "\t" + "Pool[S] = 0;\n";
                    cad += "\t" + "S = S + 1;\n";

                    codigo3d.Codigo = cad;//asignamos la cadena al nodo de retorno
                    codigo3d.Tipo = "str";//asignamos el tipo de dato
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " + " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else if (auxizq.Tipo == "str"){
                if (auxder.Tipo == "num") {
                    var cad = "";
                    codigo3d.Valor = getTemp();//obtenemos el temporal

                    cad += "\t" + codigo3d.Valor + " = H;\n";//obtenemos el valor del heap donde guardaremos la concatenacion
                    cad += "\t" + "H = H + 1;\n";// aumentamos el apuntador de heap para su siguiente uso
                    cad += "\t" + "Heap[" + codigo3d.Valor + "] = S;\n";// asignamos al heap la posicion del pool string

                    //cadena 1
                    var auxpool = getTemp();

                    var auxetqif = getEtq();
                    var auxetqifsalida = getEtq();

                    var auxpool2 = getTemp();

                    cad += "\t" +auxpool + " = " + "Heap[" + auxizq.Valor + "];\n";
                    cad += "\t" +auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" +auxetqif + ":\n";
                    cad += "\t" +"if (" + auxpool2 + " == 0) goto " + auxetqifsalida + ";\n";
                    cad += "\t" +"Pool[S] = " + auxpool2 + ";\n";//asignamos el valor de cada caracter al temporal
                    cad += "\t" +"S = S + 1;\n";//asignamos la siguiente posicion del pool
                    cad += "\t" +auxpool + " = " + auxpool + " + 1;\n";//obtenemos el nuevo valor del heap
                    cad += "\t" +auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" +"goto " + auxetqif + ";\n";// salto para volver a evaluar el pool
                    cad += "\t" +auxetqifsalida + ":\n";//etq de salida por si el if es verdadero

                    //numero
                    cad += "\t" +"Pool[S] = -1;\n"; //asignamos bandera que es numero
                    cad += "\t" +"S = S + 1;\n";//aumentamos el puntero de S
                    cad += "\t" +"Pool[S] = " + auxder.Valor + ";\n";//pasamos el valor del temporal al SP
                    cad += "\t" +"S = S + 1;\n";//aumentamos el puntero
                    cad += "\t" +"Pool[S] = -2;\n";//indicamos que terminan los numero
                    cad += "\t" +"S = S + 1;\n";//aumento del puntero

                    cad += "\t" +"Pool[S] = 0;\n";
                    cad += "\t" +"S = S + 1;\n";

                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;//asignamos la cadena al nodo de retorno
                    codigo3d.Tipo = "str";//asignamos el tipo de dato
                } else if (auxder.Tipo == "bool") {
                    var cad = "";
                    codigo3d.Valor = getTemp();//obtenemos el temporal

                    cad += "\t" + codigo3d.Valor + " = H;\n";//obtenemos el valor del heap donde guardaremos la concatenacion
                    cad += "\t" +"H = H + 1;\n";// aumentamos el apuntador de heap para su siguiente uso
                    cad += "\t" +"Heap[" + codigo3d.Valor + "] = S;\n";// asignamos al heap la posicion del pool string

                    var cad = "";
                    if (auxder.V == "" && auxder.F == "") {
                        cad += auxder.Codigo;
                    } else {
                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += auxder.Codigo;
                        cad += "\t" + auxder.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxder.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        auxder.Valor = auxtemp;
                    }               

                    //cadena 1
                    var auxpool = getTemp();

                    var auxetqif = getEtq();
                    var auxetqifsalida = getEtq();

                    var auxpool2 = getTemp();

                    cad += "\t" +auxpool + " = " + "Heap[" + auxizq.Valor + "];\n";
                    cad += "\t" +auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" +auxetqif + ":\n";
                    cad += "\t" +"if (" + auxpool2 + " == 0) goto " + auxetqifsalida + ";\n";
                    cad += "\t" +"Pool[S] = " + auxpool2 + ";\n";//asignamos el valor de cada caracter al temporal
                    cad += "\t" +"S = S + 1;\n";//asignamos la siguiente posicion del pool
                    cad += "\t" +auxpool + " = " + auxpool + " + 1;\n";//obtenemos el nuevo valor del heap
                    cad += "\t" +auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" +"goto " + auxetqif + ";\n";// salto para volver a evaluar el pool
                    cad += "\t" +auxetqifsalida + ":\n";//etq de salida por si el if es verdadero

                    //bool
                    cad += "\t" +"Pool[S] = -1;\n"; //asignamos bandera que es numero
                    cad += "\t" +"S = S + 1;\n";//aumentamos el puntero de S
                    cad += "\t" +"Pool[S] = " + auxder.Valor + ";\n";//pasamos el valor del temporal al SP
                    cad += "\t" +"S = S + 1;\n";//aumentamos el puntero
                    cad += "\t" +"Pool[S] = -2;\n";//indicamos que terminan los numero
                    cad += "\t" +"S = S + 1;\n";//aumento del puntero

                    cad += "\t" +"Pool[S] = 0;\n";
                    cad += "\t" +"S = S + 1;\n";

                    codigo3d.Codigo = auxizq.Codigo + cad;//asignamos la cadena al nodo de retorno
                    codigo3d.Tipo = "str";//asignamos el tipo de dato
                } else if (auxder.Tipo == "str") {
                    var cad = "";
                    codigo3d.Valor = getTemp();//obtenemos el temporal

                    cad += "\t" +codigo3d.Valor + " = H;\n";//obtenemos el valor del heap donde guardaremos la concatenacion
                    cad += "\t" +"H = H + 1;\n";// aumentamos el apuntador de heap para su siguiente uso
                    cad += "\t" +"Heap[" + codigo3d.Valor + "] = S;\n";// asignamos al heap la posicion del pool string

                    //cadena 1
                    var auxpool = getTemp();

                    var auxetqif = getEtq();
                    var auxetqifsalida = getEtq();

                    var auxpool2 = getTemp();

                    cad += "\t" +auxpool + " = " + "Heap[" + auxizq.Valor + "];\n";
                    cad += "\t" +auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" +auxetqif + ":\n";
                    cad += "\t" +"if (" + auxpool2 + " == 0) goto " + auxetqifsalida + ";\n";
                    cad += "\t" + "Pool[S] = " + auxpool2 + ";\n";//asignamos el valor de cada caracter al temporal
                    cad += "\t" +"S = S + 1;\n";//asignamos la siguiente posicion del pool
                    cad += "\t" +auxpool + " = " + auxpool + " + 1;\n";//obtenemos el nuevo valor del heap
                    cad += "\t" +auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" +"goto " + auxetqif + ";\n";// salto para volver a evaluar el pool
                    cad += "\t" +auxetqifsalida + ":\n";//etq de salida por si el if es verdadero
                    
                    //cadena2
                    auxpool = getTemp();

                    auxetqif = getEtq();
                    auxetqifsalida = getEtq();

                    auxpool2 = getTemp();

                    cad += "\t" +auxpool + " = " + "Heap[" + auxder.Valor + "];\n";
                    cad += "\t" +auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" +auxetqif + ":\n";
                    cad += "\t" +"if (" + auxpool2 + " == 0) goto " + auxetqifsalida + ";\n";
                    cad += "\t" +"Pool[S] = " + auxpool2 + ";\n";//asignamos el valor de cada caracter al temporal
                    cad += "\t" +"S = S + 1;\n";//asignamos la siguiente posicion del pool
                    cad += "\t" +auxpool + " = " + auxpool + " + 1;\n";//obtenemos el nuevo valor del heap
                    cad += "\t" +auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" +"goto " + auxetqif + ";\n";// salto para volver a evaluar el pool
                    cad += "\t" +auxetqifsalida + ":\n";//etq de salida por si el if es verdadero
                    cad += "\t" +"Pool[S] = 0;\n";
                    cad += "\t" +"S = S + 1;\n";

                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;//asignamos la cadena al nodo de retorno
                    codigo3d.Tipo = "str";//asignamos el tipo de dato
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " + " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else {
                insertarError("Semantico", "No se puede " + auxizq.Tipo + " + " + auxder.Tipo, this.Fila, this.Columna);
            }
        }
        return codigo3d;
    };

    this.ResolverResta = function (izq, der) {
        var codigo3d = new Nodo3D();

        if (izq != null || izq != undefined){
            var auxizq = izq.Generar3D();
            var auxder = der.Generar3D();

            if (ContarErrores()) {
                if (auxizq.Tipo == "num") {
                    if (auxder.Tipo == "num") {
                        var cad = "";
                        codigo3d.Valor = getTemp();
                        cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " - " + auxder.Valor + ";\n";
                        codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                        codigo3d.Tipo = "num";
                    } else if (auxder.Tipo == "bool") {
                        if (auxder.V == "" && auxder.F == "") {//si trae etiquetas viene de una relacional si no es un bool nativo
                            var cad = "";
                            codigo3d.Valor = getTemp();
                            cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " - " + auxder.Valor + ";\n";
                            codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                            codigo3d.Tipo = "num";
                        } else {
                            var cad = "";

                            var auxtemp = getTemp();
                            var salida = getEtq();

                            cad += "\t" + auxder.V + ":\n";
                            cad += "\t" + auxtemp + " = 1;\n";
                            cad += "\t" + "goto " + salida + ";\n";
                            cad += "\t" + auxder.F + ":\n";
                            cad += "\t" + auxtemp + " = 0;\n";
                            cad += "\t" + salida + ":\n";

                            codigo3d.Valor = getTemp();
                            cad += "\t" + codigo3d.Valor + " = " + auxizq.Valor + " - " + auxtemp + ";\n";
                            codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                            codigo3d.Tipo = "num";
                        }

                    } else {
                        insertarError("Semantico", "No se puede " + auxizq.Tipo + " - " + auxder.Tipo, this.Fila, this.Columna);
                    }
                } else if (auxizq.Tipo == "bool") {
                    if (auxder.Tipo == "num") {
                        var cad = "";
                        if (auxizq.V == "" && auxizq.F == "") {
                            cad += auxizq.Codigo;
                        } else {
                            var auxtemp = getTemp();
                            var salida = getEtq();

                            cad += auxizq.Codigo;
                            cad += "\t" + auxizq.V + ":\n";
                            cad += "\t" + auxtemp + " = 1;\n";
                            cad += "\t" + "goto " + salida + ";\n";
                            cad += "\t" + auxizq.F + ":\n";
                            cad += "\t" + auxtemp + " = 0;\n";
                            cad += "\t" + salida + ":\n";

                            auxizq.Valor = auxtemp;
                        }
                        codigo3d.Valor = getTemp();
                        cad += auxder.Codigo;
                        cad += "\t" + codigo3d.Valor + " = " + auxizq.Valor + " - " + auxder.Valor + ";\n";
                        codigo3d.Codigo = cad;
                        codigo3d.Tipo = "num";
                    } else {
                        insertarError("Semantico", "No se puede " + auxizq.Tipo + " - " + auxder.Tipo, this.Fila, this.Columna);
                    }
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " - " + auxder.Tipo, this.Fila, this.Columna);
                }
            } 
        } else {
            var auxder = der.Generar3D();

            if (ContarErrores()) {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    codigo3d.Valor = getTemp();
                    cad = "\t" + codigo3d.Valor + " = " + " - " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    if (auxder.V == "" && auxder.F == "") {//si trae etiquetas viene de una relacional si no es un bool nativo
                        var cad = "";
                        codigo3d.Valor = getTemp();
                        cad = "\t" + codigo3d.Valor + " = " + " - " + auxder.Valor + ";\n";
                        codigo3d.Codigo = auxder.Codigo + cad;
                        codigo3d.Tipo = "num";
                    } else {
                        var cad = "";

                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += "\t" + auxder.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxder.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        codigo3d.Valor = getTemp();
                        cad += "\t" + codigo3d.Valor + " = " + " - " + auxtemp + ";\n";
                        codigo3d.Codigo = auxder.Codigo + cad;
                        codigo3d.Tipo = "num";
                    }

                } else {
                    insertarError("Semantico", "No se puede - " + auxder.Tipo, this.Fila, this.Columna);
                }
            }
        }

        
        return codigo3d;
    };

    this.ResolverMultiplicacion = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    codigo3d.Valor = getTemp();
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " * " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    if (auxder.V == "" && auxder.F == "") {//si trae etiquetas viene de una relacional si no es un bool nativo
                        var cad = "";
                        codigo3d.Valor = getTemp();
                        cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " * " + auxder.Valor + ";\n";
                        codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                        codigo3d.Tipo = "num";
                    } else {
                        var cad = "";

                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += "\t" + auxder.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxder.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        codigo3d.Valor = getTemp();
                        cad += "\t" + codigo3d.Valor + " = " + auxizq.Valor + " * " + auxtemp + ";\n";
                        codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                        codigo3d.Tipo = "num";
                    }

                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " * " + auxder.Tipo, this.Fila, this.Columna); 
                }
            } else if (auxizq.Tipo == "bool") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    if (auxizq.V == "" && auxizq.F == "") {
                        cad += auxizq.Codigo;
                    } else {
                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += auxizq.Codigo;
                        cad += "\t" + auxizq.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxizq.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        auxizq.Valor = auxtemp;
                    }
                    codigo3d.Valor = getTemp();
                    cad += auxder.Codigo;
                    cad += "\t" + codigo3d.Valor + " = " + auxizq.Valor + " * " + auxder.Valor + ";\n";
                    codigo3d.Codigo = cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    var cad = "";

                    if (auxizq.V == "" && auxizq.F == "") {
                        cad += auxizq.Codigo;
                    } else {
                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += auxizq.Codigo;
                        cad += "\t" + auxizq.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxizq.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        auxizq.Valor = auxtemp;
                    }
                    if (auxder.V == "" && auxder.F == "") {
                        cad += auxder.Codigo;
                    } else {
                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += auxder.Codigo;
                        cad += "\t" + auxder.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxder.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        auxder.Valor = auxtemp;
                    }
                    codigo3d.Valor = getTemp();
                    cad += "\t" + codigo3d.Valor + " = " + auxizq.Valor + " * " + auxder.Valor + ";\n";
                    codigo3d.Codigo = cad;
                    codigo3d.Tipo = "num";
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " * " + auxder.Tipo, this.Fila, this.Columna); 
                }
            } else {
                insertarError("Semantico", "No se puede " + auxizq.Tipo + " * " + auxder.Tipo, this.Fila, this.Columna);
            }
        }
        return codigo3d;
    };

    this.ResolverDivision = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    codigo3d.Valor = getTemp();
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " / " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    if (auxder.V == "" && auxder.F == "") {//si trae etiquetas viene de una relacional si no es un bool nativo
                        var cad = "";
                        codigo3d.Valor = getTemp();
                        cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " / " + auxder.Valor + ";\n";
                        codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                        codigo3d.Tipo = "num";
                    } else {
                        var cad = "";

                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += "\t" + auxder.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxder.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        codigo3d.Valor = getTemp();
                        cad += "\t" + codigo3d.Valor + " = " + auxizq.Valor + " / " + auxtemp + ";\n";
                        codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                        codigo3d.Tipo = "num";
                    }

                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " / " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else if (auxizq.Tipo == "bool") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    if (auxizq.V == "" && auxizq.F == "") {
                        cad += auxizq.Codigo;
                    } else {
                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += auxizq.Codigo;
                        cad += "\t" + auxizq.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxizq.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        auxizq.Valor = auxtemp;
                    }
                    codigo3d.Valor = getTemp();
                    cad += auxder.Codigo;
                    cad += "\t" + codigo3d.Valor + " = " + auxizq.Valor + " / " + auxder.Valor + ";\n";
                    codigo3d.Codigo = cad;
                    codigo3d.Tipo = "num";
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " / " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else {
                insertarError("Semantico", "No se puede " + auxizq.Tipo + " / " + auxder.Tipo, this.Fila, this.Columna);
            }
        }
        return codigo3d;
    };

    this.ResolverModulo = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    codigo3d.Valor = getTemp();
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " % " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    if (auxder.V == "" && auxder.F == "") {//si trae etiquetas viene de una relacional si no es un bool nativo
                        var cad = "";
                        codigo3d.Valor = getTemp();
                        cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " % " + auxder.Valor + ";\n";
                        codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                        codigo3d.Tipo = "num";
                    } else {
                        var cad = "";

                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += "\t" + auxder.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxder.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        codigo3d.Valor = getTemp();
                        cad += "\t" + codigo3d.Valor + " = " + auxizq.Valor + " % " + auxtemp + ";\n";
                        codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                        codigo3d.Tipo = "num";
                    }

                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " % " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else if (auxizq.Tipo == "bool") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    if (auxizq.V == "" && auxizq.F == "") {
                        cad += auxizq.Codigo;
                    } else {
                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += auxizq.Codigo;
                        cad += "\t" + auxizq.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxizq.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        auxizq.Valor = auxtemp;
                    }
                    codigo3d.Valor = getTemp();
                    cad += auxder.Codigo;
                    cad += "\t" + codigo3d.Valor + " = " + auxizq.Valor + " % " + auxder.Valor + ";\n";
                    codigo3d.Codigo = cad;
                    codigo3d.Tipo = "num";
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " % " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else {
                insertarError("Semantico", "No se puede " + auxizq.Tipo + " % " + auxder.Tipo, this.Fila, this.Columna);
            }
        }
        return codigo3d;
    };

    this.ResolverPotencia = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    codigo3d.Valor = getTemp();
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " ^ " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    if (auxder.V == "" && auxder.F == "") {//si trae etiquetas viene de una relacional si no es un bool nativo
                        var cad = "";
                        codigo3d.Valor = getTemp();
                        cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " ^ " + auxder.Valor + ";\n";
                        codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                        codigo3d.Tipo = "num";
                    } else {
                        var cad = "";

                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += "\t" + auxder.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxder.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        codigo3d.Valor = getTemp();
                        cad += "\t" + codigo3d.Valor + " = " + auxizq.Valor + " ^ " + auxtemp + ";\n";
                        codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                        codigo3d.Tipo = "num";
                    }

                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " ^ " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else if (auxizq.Tipo == "bool") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    if (auxizq.V == "" && auxizq.F == "") {
                        cad += auxizq.Codigo;
                    } else {
                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += auxizq.Codigo;
                        cad += "\t" + auxizq.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + auxizq.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        auxizq.Valor = auxtemp;
                    }
                    codigo3d.Valor = getTemp();
                    cad += auxder.Codigo;
                    cad += "\t" + codigo3d.Valor + " = " + auxizq.Valor + " ^ " + auxder.Valor + ";\n";
                    codigo3d.Codigo = cad;
                    codigo3d.Tipo = "num";
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " ^ " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else {
                insertarError("Semantico", "No se puede " + auxizq.Tipo + " ^ " + auxder.Tipo, this.Fila, this.Columna);
            }
        }
        return codigo3d;
    };

    this.ResolverIgualacion = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {                
                var cad = "";

                codigo3d.V = getEtq();
                codigo3d.F = getEtq();

                cad += "\t" + "if (" + auxizq.Valor + " == " + auxder.Valor + ") goto " + codigo3d.V + ";\n";
                cad += "\t" + "goto " + codigo3d.F + ";\n";
 
                codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                codigo3d.Tipo = "bool";
                
            } else if (auxizq.Tipo == "bool" && auxder.Tipo == "bool") {
                var cad = "";

                if (auxizq.V == "" && auxizq.F == "") {
                    cad += auxizq.Codigo;
                } else {
                    var auxtemp = getTemp();
                    var salida = getEtq();

                    cad += auxizq.Codigo;
                    cad += "\t" + auxizq.V + ":\n";
                    cad += "\t" + auxtemp + " = 1;\n";
                    cad += "\t" + "goto " + salida + ";\n";
                    cad += "\t" + auxizq.F + ":\n";
                    cad += "\t" + auxtemp + " = 0;\n";
                    cad += "\t" + salida + ":\n";

                    auxizq.Valor = auxtemp;
                }
                if (auxder.V == "" && auxder.F == "") {
                    cad += auxder.Codigo;
                } else {
                    var auxtemp = getTemp();
                    var salida = getEtq();

                    cad += auxder.Codigo;
                    cad += "\t" + auxder.V + ":\n";
                    cad += "\t" + auxtemp + " = 1;\n";
                    cad += "\t" + "goto " + salida + ";\n";
                    cad += "\t" + auxder.F + ":\n";
                    cad += "\t" + auxtemp + " = 0;\n";
                    cad += "\t" + salida + ":\n";

                    auxder.Valor = auxtemp;
                }

                codigo3d.V = getEtq();
                codigo3d.F = getEtq();

                cad += "\t" + "if (" + auxizq.Valor + " == " + auxder.Valor + ") goto " + codigo3d.V + ";\n";
                cad += "\t" + "goto " + codigo3d.F + ";\n";

                codigo3d.Codigo = cad;
                codigo3d.Tipo = "bool";
            } else if (auxizq.Tipo == "str" && auxder.Tipo == "str"){
                var cad = "";
                var etqsiesnuloV = getEtq();
                var etqsiesnuloF = getEtq();
                var etqcad1nuloV = getEtq();
                var etqcad1nuloF = getEtq();
                var etqcad2nuloV = getEtq();
                var etqcad2nuloF = getEtq();
                var etqcad1finV = getEtq();
                var etqcad1finF = getEtq();
                var etqcad2finV = getEtq();
                var etqcad2finF = getEtq();
                var etqcadigualesV = getEtq();
                var etqcadigualesF = getEtq();
                var etqcadfinalesV = getEtq();
                var etqcadfinalesF = getEtq();
                var etqsalida = getEtq();

                var tempcad1heap = getTemp();
                var tempcad2heap = getTemp();
                var temcad1pool = getTemp();
                var temcad2pool = getTemp();
                codigo3d.Valor = getTemp();//etiqueta que tendra si es verdadero o falso un resultado

                cad += "\t" + tempcad1heap + " = " + "Heap[" + auxizq.Valor + "];\n";
                cad += "\t" + tempcad2heap + " = " + "Heap[" + auxder.Valor + "];\n";
                cad += "\t" + "if (" + tempcad1heap + " != " + tempcad2heap + ") goto " + etqsiesnuloV + ";\n";
                cad += "\t" + "goto " + etqsiesnuloF + ";\n";
                cad += "\t" + etqsiesnuloV + ":\n";
                cad += "\t" + "if (" + tempcad1heap + " >= 0) goto " + etqcad1nuloV + ";\n";
                cad += "\t" + "goto " + etqcad1nuloF + ";\n";
                cad += "\t" + etqcad1nuloV + ":\n";
                cad += "\t" + "if (" + tempcad2heap + " >= 0) goto " + etqcad2nuloV + ";\n";
                cad += "\t" + "goto " + etqcad2nuloF + ";\n";
                cad += "\t" + etqcad2nuloV + ":\n";
                cad += "\t" + temcad1pool + " = Pool[" + tempcad1heap + "]" + ";\n";
                cad += "\t" + temcad2pool + " = Pool[" + tempcad2heap + "]" + ";\n";
                cad += "\t" + "if (" + temcad1pool + " != 0) goto " + etqcad1finV + ";\n";
                cad += "\t" + "goto " + etqcad1finF + ";\n";
                cad += "\t" + etqcad1finV + ":\n";
                cad += "\t" + "if (" + temcad2pool + " != 0) goto " + etqcad2finV + ";\n";
                cad += "\t" + "goto " + etqcad2finF + ";\n";
                cad += "\t" + etqcad2finV + ":\n";
                cad += "\t" + "if (" + temcad1pool + " == " + temcad2pool + ") goto " + etqcadigualesV + ";\n";
                cad += "\t" + "goto " + etqcadigualesF + ";\n";
                cad += "\t" + etqcadigualesV + ":\n";
                cad += "\t" + tempcad1heap + " = " + tempcad1heap + " + 1" + ";\n";
                cad += "\t" + tempcad2heap + " = " + tempcad2heap + " + 1" + ";\n";
                cad += "\t" + "goto " + etqcad2nuloV + ";\n";
                cad += "\t" + etqcad1finF + ":\n";
                cad += "\t" + "if (" + temcad2pool + " == 0) goto " + etqcadfinalesV + ";\n";
                cad += "\t" + " goto " + etqcadfinalesF + ";\n";
                cad += "\t" + etqsiesnuloF + ":\n";
                cad += "\t" + etqcadfinalesV + ":\n";
                cad += "\t" + codigo3d.Valor + " = 1" + ";\n";
                cad += "\t" + "goto " + etqsalida + ";\n";
                cad += "\t" + etqcad1nuloF + ":\n";
                cad += "\t" + "Exit(102)" + ";\n";//error nulo
                cad += "\t" + etqcad2nuloF + ":\n";
                cad += "\t" + "Exit(102)" + ";\n";//error nulo
                cad += "\t" + etqcad2finF + ":\n";
                cad += "\t" + etqcadigualesF + ":\n";
                cad += "\t" + etqcadfinalesF + ":\n";
                cad += "\t" + codigo3d.Valor + " = 0" + ";\n";
                cad += "\t" + etqsalida + ":\n";

                codigo3d.V = "";
                codigo3d.F = "";
                codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                codigo3d.Tipo = "bool";
            } else {
                insertarError("Semantico", "No se puede " + auxizq.Tipo + " == " + auxder.Tipo, this.Fila, this.Columna);
            }
        }
        return codigo3d;
    };

    this.ResolverDiferenciacion = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                var cad = "";

                codigo3d.V = getEtq();
                codigo3d.F = getEtq();

                cad += "\t" + "if (" + auxizq.Valor + " != " + auxder.Valor + ") goto " + codigo3d.V + ";\n";
                cad += "\t" + "goto " + codigo3d.F + ";\n";

                codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                codigo3d.Tipo = "bool";

            } else if (auxizq.Tipo == "bool" && auxder.Tipo == "bool") {
                var cad = "";

                if (auxizq.V == "" && auxizq.F == "") {
                    cad += auxizq.Codigo;
                } else {
                    var auxtemp = getTemp();
                    var salida = getEtq();

                    cad += auxizq.Codigo;
                    cad += "\t" + auxizq.V + ":\n";
                    cad += "\t" + auxtemp + " = 1;\n";
                    cad += "\t" + "goto " + salida + ";\n";
                    cad += "\t" + auxizq.F + ":\n";
                    cad += "\t" + auxtemp + " = 0;\n";
                    cad += "\t" + salida + ":\n";

                    auxizq.Valor = auxtemp;
                }
                if (auxder.V == "" && auxder.F == "") {
                    cad += auxder.Codigo;
                } else {
                    var auxtemp = getTemp();
                    var salida = getEtq();

                    cad += auxder.Codigo;
                    cad += "\t" + auxder.V + ":\n";
                    cad += "\t" + auxtemp + " = 1;\n";
                    cad += "\t" + "goto " + salida + ";\n";
                    cad += "\t" + auxder.F + ":\n";
                    cad += "\t" + auxtemp + " = 0;\n";
                    cad += "\t" + salida + ":\n";

                    auxder.Valor = auxtemp;
                }

                codigo3d.V = getEtq();
                codigo3d.F = getEtq();

                cad += "\t" + "if (" + auxizq.Valor + " != " + auxder.Valor + ") goto " + codigo3d.V + ";\n";
                cad += "\t" + "goto " + codigo3d.F + ";\n";

                codigo3d.Codigo = cad;
                codigo3d.Tipo = "bool";
            } else if (auxizq.Tipo == "str" && auxder.Tipo == "str") {
                var cad = "";
                var etqsiesnuloV = getEtq();
                var etqsiesnuloF = getEtq();
                var etqcad1nuloV = getEtq();
                var etqcad1nuloF = getEtq();
                var etqcad2nuloV = getEtq();
                var etqcad2nuloF = getEtq();
                var etqcad1finV = getEtq();
                var etqcad1finF = getEtq();
                var etqcad2finV = getEtq();
                var etqcad2finF = getEtq();
                var etqcadigualesV = getEtq();
                var etqcadigualesF = getEtq();
                var etqcadfinalesV = getEtq();
                var etqcadfinalesF = getEtq();
                var etqsalida = getEtq();

                var tempcad1heap = getTemp();
                var tempcad2heap = getTemp();
                var temcad1pool = getTemp();
                var temcad2pool = getTemp();
                codigo3d.Valor = getTemp();//etiqueta que tendra si es verdadero o falso un resultado

                cad += "\t" + tempcad1heap + " = " + "Heap[" + auxizq.Valor + "];\n";
                cad += "\t" + tempcad2heap + " = " + "Heap[" + auxder.Valor + "];\n";
                cad += "\t" + "if (" + tempcad1heap + " == " + tempcad2heap + ") goto " + etqsiesnuloV + ";\n";//cambia por negacion a ==
                cad += "\t" + "goto " + etqsiesnuloF + ";\n";
                cad += "\t" + etqsiesnuloV + ":\n";
                cad += "\t" + "if (" + tempcad1heap + " >= 0) goto " + etqcad1nuloV + ";\n";
                cad += "\t" + "goto " + etqcad1nuloF + ";\n";
                cad += "\t" + etqcad1nuloV + ":\n";
                cad += "\t" + "if (" + tempcad2heap + " >= 0) goto " + etqcad2nuloV + ";\n";
                cad += "\t" + "goto " + etqcad2nuloF + ";\n";
                cad += "\t" + etqcad2nuloV + ":\n";
                cad += "\t" + temcad1pool + " = Pool[" + tempcad1heap + "]" + ";\n";
                cad += "\t" + temcad2pool + " = Pool[" + tempcad2heap + "]" + ";\n";
                cad += "\t" + "if (" + temcad1pool + " != 0) goto " + etqcad1finV + ";\n";
                cad += "\t" + "goto " + etqcad1finF + ";\n";
                cad += "\t" + etqcad1finV + ":\n";
                cad += "\t" + "if (" + temcad2pool + " != 0) goto " + etqcad2finV + ";\n";
                cad += "\t" + "goto " + etqcad2finF + ";\n";
                cad += "\t" + etqcad2finV + ":\n";
                cad += "\t" + "if (" + temcad1pool + " != " + temcad2pool + ") goto " + etqcadigualesV + ";\n";
                cad += "\t" + "goto " + etqcadigualesF + ";\n";
                cad += "\t" + etqcadigualesV + ":\n";
                cad += "\t" + tempcad1heap + " = " + tempcad1heap + " + 1" + ";\n";
                cad += "\t" + tempcad2heap + " = " + tempcad2heap + " + 1" + ";\n";
                cad += "\t" + "goto " + etqcad2nuloV + ";\n";
                cad += "\t" + etqcad1finF + ":\n";
                cad += "\t" + "if (" + temcad2pool + " == 0) goto " + etqcadfinalesV + ";\n";
                cad += "\t" + " goto " + etqcadfinalesF + ";\n";
                cad += "\t" + etqsiesnuloF + ":\n";
                cad += "\t" + etqcadfinalesV + ":\n";
                cad += "\t" + codigo3d.Valor + " = 1" + ";\n";
                cad += "\t" + "goto " + etqsalida + ";\n";
                cad += "\t" + etqcad1nuloF + ":\n";
                cad += "\t" + "Exit(102)" + ";\n";//error nulo
                cad += "\t" + etqcad2nuloF + ":\n";
                cad += "\t" + "Exit(102)" + ";\n";//error nulo
                cad += "\t" + etqcad2finF + ":\n";
                cad += "\t" + etqcadigualesF + ":\n";
                cad += "\t" + etqcadfinalesF + ":\n";
                cad += "\t" + codigo3d.Valor + " = 0" + ";\n";
                cad += "\t" + etqsalida + ":\n";

                codigo3d.V = "";
                codigo3d.F = "";
                codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                codigo3d.Tipo = "bool";
            } else {
                insertarError("Semantico", "No se puede " + auxizq.Tipo + " != " + auxder.Tipo, this.Fila, this.Columna);
            }
        }
        return codigo3d;
    };

    this.ResolverMayor = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                var cad = "";

                codigo3d.V = getEtq();
                codigo3d.F = getEtq();

                cad += "\t" + "if (" + auxizq.Valor + " > " + auxder.Valor + ") goto " + codigo3d.V + ";\n";
                cad += "\t" + "goto " + codigo3d.F + ";\n";

                codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                codigo3d.Tipo = "bool";

            } else if (auxizq.Tipo == "bool" && auxder.Tipo == "bool") {
                var cad = "";

                if (auxizq.V == "" && auxizq.F == "") {
                    cad += auxizq.Codigo;
                } else {
                    var auxtemp = getTemp();
                    var salida = getEtq();

                    cad += auxizq.Codigo;
                    cad += "\t" + auxizq.V + ":\n";
                    cad += "\t" + auxtemp + " = 1;\n";
                    cad += "\t" + "goto " + salida + ";\n";
                    cad += "\t" + auxizq.F + ":\n";
                    cad += "\t" + auxtemp + " = 0;\n";
                    cad += "\t" + salida + ":\n";

                    auxizq.Valor = auxtemp;
                }
                if (auxder.V == "" && auxder.F == "") {
                    cad += auxder.Codigo;
                } else {
                    var auxtemp = getTemp();
                    var salida = getEtq();

                    cad += auxder.Codigo;
                    cad += "\t" + auxder.V + ":\n";
                    cad += "\t" + auxtemp + " = 1;\n";
                    cad += "\t" + "goto " + salida + ";\n";
                    cad += "\t" + auxder.F + ":\n";
                    cad += "\t" + auxtemp + " = 0;\n";
                    cad += "\t" + salida + ":\n";

                    auxder.Valor = auxtemp;
                }

                codigo3d.V = getEtq();
                codigo3d.F = getEtq();

                cad += "\t" + "if (" + auxizq.Valor + " > " + auxder.Valor + ") goto " + codigo3d.V + ";\n";
                cad += "\t" + "goto " + codigo3d.F + ";\n";

                codigo3d.Codigo = cad;
                codigo3d.Tipo = "bool";
            } else if (auxizq.Tipo == "str" && auxder.Tipo == "str") {
                var cad = "";
                var etqsiesnuloV = getEtq();
                var etqsiesnuloF = getEtq();
                var etqcad1nuloV = getEtq();
                var etqcad1nuloF = getEtq();
                var etqcad2nuloV = getEtq();
                var etqcad2nuloF = getEtq();
                var etqcad1finV = getEtq();
                var etqcad1finF = getEtq();
                var etqcad2finV = getEtq();
                var etqcad2finF = getEtq();
                var etqcadigualesV = getEtq();
                var etqcadigualesF = getEtq();
                var etqcadfinalesV = getEtq();
                var etqcadfinalesF = getEtq();
                var etqsalida = getEtq();

                var tempcad1heap = getTemp();
                var tempcad2heap = getTemp();
                var temcad1pool = getTemp();
                var temcad2pool = getTemp();
                codigo3d.Valor = getTemp();//etiqueta que tendra si es verdadero o falso un resultado

                cad += "\t" + tempcad1heap + " = " + "Heap[" + auxizq.Valor + "];\n";
                cad += "\t" + tempcad2heap + " = " + "Heap[" + auxder.Valor + "];\n";                
                cad += "\t" + "if (" + tempcad1heap + " >= 0) goto " + etqcad1nuloV + ";\n";
                cad += "\t" + "goto " + etqcad1nuloF + ";\n";
                cad += "\t" + etqcad1nuloV + ":\n";
                cad += "\t" + "if (" + tempcad2heap + " >= 0) goto " + etqcad2nuloV + ";\n";
                cad += "\t" + "goto " + etqcad2nuloF + ";\n";
                cad += "\t" + etqcad2nuloV + ":\n";
                cad += "\t" + temcad1pool + " = Pool[" + tempcad1heap + "]" + ";\n";
                cad += "\t" + temcad2pool + " = Pool[" + tempcad2heap + "]" + ";\n";
                cad += "\t" + "if (" + temcad1pool + " != 0) goto " + etqcad1finV + ";\n";
                cad += "\t" + "goto " + etqcad1finF + ";\n";
                cad += "\t" + etqcad1finV + ":\n";
                cad += "\t" + "if (" + temcad2pool + " != 0) goto " + etqcad2finV + ";\n";
                cad += "\t" + "goto " + etqcad2finF + ";\n";
                cad += "\t" + etqcad2finV + ":\n";
                cad += "\t" + "if (" + temcad1pool + " >= " + temcad2pool + ") goto " + etqcadigualesV + ";\n";
                cad += "\t" + "goto " + etqcadigualesF + ";\n";
                cad += "\t" + etqcadigualesV + ":\n";
                cad += "\t" + tempcad1heap + " = " + tempcad1heap + " + 1" + ";\n";
                cad += "\t" + tempcad2heap + " = " + tempcad2heap + " + 1" + ";\n";
                cad += "\t" + "goto " + etqcad2nuloV + ";\n";
                cad += "\t" + etqcad1finF + ":\n";
                cad += "\t" + "if (" + temcad2pool + " == 0) goto " + etqcadfinalesV + ";\n";
                cad += "\t" + " goto " + etqcadfinalesF + ";\n";
                cad += "\t" + etqcadfinalesV + ":\n";
                cad += "\t" + codigo3d.Valor + " = 1" + ";\n";
                cad += "\t" + "goto " + etqsalida + ";\n";
                cad += "\t" + etqcad1nuloF + ":\n";
                cad += "\t" + "Exit(102)" + ";\n";//error nulo
                cad += "\t" + etqcad2nuloF + ":\n";
                cad += "\t" + "Exit(102)" + ";\n";//error nulo
                cad += "\t" + etqcad2finF + ":\n";
                cad += "\t" + etqcadigualesF + ":\n";
                cad += "\t" + etqcadfinalesF + ":\n";
                cad += "\t" + codigo3d.Valor + " = 0" + ";\n";
                cad += "\t" + etqsalida + ":\n";

                codigo3d.V = "";
                codigo3d.F = "";
                codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                codigo3d.Tipo = "bool";
            } else {
                insertarError("Semantico", "No se puede " + auxizq.Tipo + " > " + auxder.Tipo, this.Fila, this.Columna);
            }
        }
        return codigo3d;
    };

    this.ResolverMenor = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
                var cad = "";

                codigo3d.V = getEtq();
                codigo3d.F = getEtq();

                cad += "\t" + "if (" + auxizq.Valor + " < " + auxder.Valor + ") goto " + codigo3d.V + ";\n";
                cad += "\t" + "goto " + codigo3d.F + ";\n";

                codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                codigo3d.Tipo = "bool";

            } else if (auxizq.Tipo == "bool" && auxder.Tipo == "bool") {
                var cad = "";

                if (auxizq.V == "" && auxizq.F == "") {
                    cad += auxizq.Codigo;
                } else {
                    var auxtemp = getTemp();
                    var salida = getEtq();

                    cad += auxizq.Codigo;
                    cad += "\t" + auxizq.V + ":\n";
                    cad += "\t" + auxtemp + " = 1;\n";
                    cad += "\t" + "goto " + salida + ";\n";
                    cad += "\t" + auxizq.F + ":\n";
                    cad += "\t" + auxtemp + " = 0;\n";
                    cad += "\t" + salida + ":\n";

                    auxizq.Valor = auxtemp;
                }
                if (auxder.V == "" && auxder.F == "") {
                    cad += auxder.Codigo;
                } else {
                    var auxtemp = getTemp();
                    var salida = getEtq();

                    cad += auxder.Codigo;
                    cad += "\t" + auxder.V + ":\n";
                    cad += "\t" + auxtemp + " = 1;\n";
                    cad += "\t" + "goto " + salida + ";\n";
                    cad += "\t" + auxder.F + ":\n";
                    cad += "\t" + auxtemp + " = 0;\n";
                    cad += "\t" + salida + ":\n";

                    auxder.Valor = auxtemp;
                }

                codigo3d.V = getEtq();
                codigo3d.F = getEtq();

                cad += "\t" + "if (" + auxizq.Valor + " < " + auxder.Valor + ") goto " + codigo3d.V + ";\n";
                cad += "\t" + "goto " + codigo3d.F + ";\n";

                codigo3d.Codigo = cad;
                codigo3d.Tipo = "bool";
            } else if (auxizq.Tipo == "str" && auxder.Tipo == "str") {
                var cad = "";
                var etqsiesnuloV = getEtq();
                var etqsiesnuloF = getEtq();
                var etqcad1nuloV = getEtq();
                var etqcad1nuloF = getEtq();
                var etqcad2nuloV = getEtq();
                var etqcad2nuloF = getEtq();
                var etqcad1finV = getEtq();
                var etqcad1finF = getEtq();
                var etqcad2finV = getEtq();
                var etqcad2finF = getEtq();
                var etqcadigualesV = getEtq();
                var etqcadigualesF = getEtq();
                var etqcadfinalesV = getEtq();
                var etqcadfinalesF = getEtq();
                var etqsalida = getEtq();

                var tempcad1heap = getTemp();
                var tempcad2heap = getTemp();
                var temcad1pool = getTemp();
                var temcad2pool = getTemp();
                codigo3d.Valor = getTemp();//etiqueta que tendra si es verdadero o falso un resultado

                cad += "\t" + tempcad1heap + " = " + "Heap[" + auxizq.Valor + "];\n";
                cad += "\t" + tempcad2heap + " = " + "Heap[" + auxder.Valor + "];\n";
                cad += "\t" + "if (" + tempcad1heap + " >= 0) goto " + etqcad1nuloV + ";\n";
                cad += "\t" + "goto " + etqcad1nuloF + ";\n";
                cad += "\t" + etqcad1nuloV + ":\n";
                cad += "\t" + "if (" + tempcad2heap + " >= 0) goto " + etqcad2nuloV + ";\n";
                cad += "\t" + "goto " + etqcad2nuloF + ";\n";
                cad += "\t" + etqcad2nuloV + ":\n";
                cad += "\t" + temcad1pool + " = Pool[" + tempcad1heap + "]" + ";\n";
                cad += "\t" + temcad2pool + " = Pool[" + tempcad2heap + "]" + ";\n";
                cad += "\t" + "if (" + temcad1pool + " != 0) goto " + etqcad1finV + ";\n";
                cad += "\t" + "goto " + etqcad1finF + ";\n";
                cad += "\t" + etqcad1finV + ":\n";
                cad += "\t" + "if (" + temcad2pool + " != 0) goto " + etqcad2finV + ";\n";
                cad += "\t" + "goto " + etqcad2finF + ";\n";
                cad += "\t" + etqcad2finV + ":\n";
                cad += "\t" + "if (" + temcad1pool + " <= " + temcad2pool + ") goto " + etqcadigualesV + ";\n";
                cad += "\t" + "goto " + etqcadigualesF + ";\n";
                cad += "\t" + etqcadigualesV + ":\n";
                cad += "\t" + tempcad1heap + " = " + tempcad1heap + " + 1" + ";\n";
                cad += "\t" + tempcad2heap + " = " + tempcad2heap + " + 1" + ";\n";
                cad += "\t" + "goto " + etqcad2nuloV + ";\n";
                cad += "\t" + etqcad1finF + ":\n";
                cad += "\t" + "if (" + temcad2pool + " == 0) goto " + etqcadfinalesV + ";\n";
                cad += "\t" + " goto " + etqcadfinalesF + ";\n";
                cad += "\t" + etqcadfinalesV + ":\n";
                cad += "\t" + codigo3d.Valor + " = 1" + ";\n";
                cad += "\t" + "goto " + etqsalida + ";\n";
                cad += "\t" + etqcad1nuloF + ":\n";
                cad += "\t" + "Exit(102)" + ";\n";//error nulo
                cad += "\t" + etqcad2nuloF + ":\n";
                cad += "\t" + "Exit(102)" + ";\n";//error nulo
                cad += "\t" + etqcad2finF + ":\n";
                cad += "\t" + etqcadigualesF + ":\n";
                cad += "\t" + etqcadfinalesF + ":\n";
                cad += "\t" + codigo3d.Valor + " = 0" + ";\n";
                cad += "\t" + etqsalida + ":\n";

                codigo3d.V = "";
                codigo3d.F = "";
                codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                codigo3d.Tipo = "bool";
            } else {
                insertarError("Semantico", "No se puede " + auxizq.Tipo + " < " + auxder.Tipo, this.Fila, this.Columna);
            }
        }
        return codigo3d;
    };

    this.ResolverMayorIgual = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
            var cad = "";

            codigo3d.V = getEtq();
            codigo3d.F = getEtq();

            cad += "\t" + "if (" + auxizq.Valor + " >= " + auxder.Valor + ") goto " + codigo3d.V + ";\n";
            cad += "\t" + "goto " + codigo3d.F + ";\n";

            codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
            codigo3d.Tipo = "bool";

        } else if (auxizq.Tipo == "bool" && auxder.Tipo == "bool") {
            var cad = "";

            if (auxizq.V == "" && auxizq.F == "") {
                cad += auxizq.Codigo;
            } else {
                var auxtemp = getTemp();
                var salida = getEtq();

                cad += auxizq.Codigo;
                cad += "\t" + auxizq.V + ":\n";
                cad += "\t" + auxtemp + " = 1;\n";
                cad += "\t" + "goto " + salida + ";\n";
                cad += "\t" + auxizq.F + ":\n";
                cad += "\t" + auxtemp + " = 0;\n";
                cad += "\t" + salida + ":\n";

                auxizq.Valor = auxtemp;
            }
            if (auxder.V == "" && auxder.F == "") {
                cad += auxder.Codigo;
            } else {
                var auxtemp = getTemp();
                var salida = getEtq();

                cad += auxder.Codigo;
                cad += "\t" + auxder.V + ":\n";
                cad += "\t" + auxtemp + " = 1;\n";
                cad += "\t" + "goto " + salida + ";\n";
                cad += "\t" + auxder.F + ":\n";
                cad += "\t" + auxtemp + " = 0;\n";
                cad += "\t" + salida + ":\n";

                auxder.Valor = auxtemp;
            }

            codigo3d.V = getEtq();
            codigo3d.F = getEtq();

            cad += "\t" + "if (" + auxizq.Valor + " >= " + auxder.Valor + ") goto " + codigo3d.V + ";\n";
            cad += "\t" + "goto " + codigo3d.F + ";\n";

            codigo3d.Codigo = cad;
            codigo3d.Tipo = "bool";
        } else {
            insertarError("Semantico", "No se puede " + auxizq.Tipo + " >= " + auxder.Tipo, this.Fila, this.Columna);
        }

        return codigo3d;
    };

    this.ResolverMenorIgual = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (auxizq.Tipo == "num" && auxder.Tipo == "num") {
            var cad = "";

            codigo3d.V = getEtq();
            codigo3d.F = getEtq();

            cad += "\t" + "if (" + auxizq.Valor + " <= " + auxder.Valor + ") goto " + codigo3d.V + ";\n";
            cad += "\t" + "goto " + codigo3d.F + ";\n";

            codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
            codigo3d.Tipo = "bool";

        } else if (auxizq.Tipo == "bool" && auxder.Tipo == "bool") {
            var cad = "";

            if (auxizq.V == "" && auxizq.F == "") {
                cad += auxizq.Codigo;
            } else {
                var auxtemp = getTemp();
                var salida = getEtq();

                cad += auxizq.Codigo;
                cad += "\t" + auxizq.V + ":\n";
                cad += "\t" + auxtemp + " = 1;\n";
                cad += "\t" + "goto " + salida + ";\n";
                cad += "\t" + auxizq.F + ":\n";
                cad += "\t" + auxtemp + " = 0;\n";
                cad += "\t" + salida + ":\n";

                auxizq.Valor = auxtemp;
            }
            if (auxder.V == "" && auxder.F == "") {
                cad += auxder.Codigo;
            } else {
                var auxtemp = getTemp();
                var salida = getEtq();

                cad += auxder.Codigo;
                cad += "\t" + auxder.V + ":\n";
                cad += "\t" + auxtemp + " = 1;\n";
                cad += "\t" + "goto " + salida + ";\n";
                cad += "\t" + auxder.F + ":\n";
                cad += "\t" + auxtemp + " = 0;\n";
                cad += "\t" + salida + ":\n";

                auxder.Valor = auxtemp;
            }

            codigo3d.V = getEtq();
            codigo3d.F = getEtq();

            cad += "\t" + "if (" + auxizq.Valor + " <= " + auxder.Valor + ") goto " + codigo3d.V + ";\n";
            cad += "\t" + "goto " + codigo3d.F + ";\n";

            codigo3d.Codigo = cad;
            codigo3d.Tipo = "bool";
        } else {
            insertarError("Semantico", "No se puede " + auxizq.Tipo + " <= " + auxder.Tipo, this.Fila, this.Columna);
        }

        return codigo3d;
    };

    this.ResolverOr = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (auxizq.Tipo == "bool" && auxder.Tipo == "bool") {
            var cad = "";

            if (auxizq.V == "" && auxizq.F == "") {
                auxizq.V = getEtq();
                auxizq.F = getEtq();

                cad += auxizq.Codigo;
                cad += "\t" + "if (" + auxizq.Valor + " == 1) goto " + auxizq.V + ";\n";
                cad += "\t" + "goto " + auxizq.F + ";\n";
            } else {
                cad += auxizq.Codigo;
            }

            cad += "\t" + auxizq.F + ":\n";
            

            if (auxder.V == "" && auxder.F == "") {
                auxder.V = getEtq();
                auxder.F = getEtq();

                cad += auxder.Codigo;
                cad += "\t" + "if (" + auxder.Valor + " == 1) goto " + auxder.V + ";\n";
                cad += "\t" + "goto " + auxder.F + ";\n";
            } else {
                cad += auxder.Codigo;
            }

            codigo3d.V = auxizq.V + ":\n\t" + auxder.V;
            codigo3d.F = auxder.F;

            codigo3d.Codigo = cad;
            codigo3d.Tipo = "bool";
        } else {
            insertarError("Semantico", "No se puede " + auxizq.Tipo + " || " + auxder.Tipo, this.Fila, this.Columna);
        }

        return codigo3d;
    };

    this.ResolverNor = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (auxizq.Tipo == "bool" && auxder.Tipo == "bool") {
            var cad = "";

            if (auxizq.V == "" && auxizq.F == "") {
                auxizq.V = getEtq();
                auxizq.F = getEtq();

                cad += auxizq.Codigo;
                cad += "\t" + "if (" + auxizq.Valor + " == 1) goto " + auxizq.V + ";\n";
                cad += "\t" + "goto " + auxizq.F + ";\n";
            } else {
                cad += auxizq.Codigo;
            }

            cad += "\t" + auxizq.F + ":\n";


            if (auxder.V == "" && auxder.F == "") {
                auxder.V = getEtq();
                auxder.F = getEtq();

                cad += auxder.Codigo;
                cad += "\t" + "if (" + auxder.Valor + " == 1) goto " + auxder.V + ";\n";
                cad += "\t" + "goto " + auxder.F + ";\n";
            } else {
                cad += auxder.Codigo;
            }

            codigo3d.F = auxizq.V + ":\n\t" + auxder.V;
            codigo3d.V = auxder.F;

            codigo3d.Codigo = cad;
            codigo3d.Tipo = "bool";
        } else {
            insertarError("Semantico", "No se puede " + auxizq.Tipo + " || " + auxder.Tipo, this.Fila, this.Columna);
        }

        return codigo3d;
    };

    this.ResolverAnd = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (auxizq.Tipo == "bool" && auxder.Tipo == "bool") {
            var cad = "";

            if (auxizq.V == "" && auxizq.F == "") {
                auxizq.V = getEtq();
                auxizq.F = getEtq();

                cad += auxizq.Codigo;
                cad += "\t" + "if (" + auxizq.Valor + " == 1) goto " + auxizq.V + ";\n";
                cad += "\t" + "goto " + auxizq.F + ";\n";
            } else {
                cad += auxizq.Codigo;
            }

            cad += "\t" + auxizq.V + ":\n";


            if (auxder.V == "" && auxder.F == "") {
                auxder.V = getEtq();
                auxder.F = getEtq();

                cad += auxder.Codigo;
                cad += "\t" + "if (" + auxder.Valor + " == 1) goto " + auxder.V + ";\n";
                cad += "\t" + "goto " + auxder.F + ";\n";
            } else {
                cad += auxder.Codigo;
            }

            codigo3d.V = auxder.V;
            codigo3d.F = auxizq.F + ":\n\t" + auxder.F;

            codigo3d.Codigo = cad;
            codigo3d.Tipo = "bool";
        } else {
            insertarError("Semantico", "No se puede " + auxizq.Tipo + " && " + auxder.Tipo, this.Fila, this.Columna);
        }

        return codigo3d;
    };

    this.ResolverNand = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (auxizq.Tipo == "bool" && auxder.Tipo == "bool") {
            var cad = "";

            if (auxizq.V == "" && auxizq.F == "") {
                auxizq.V = getEtq();
                auxizq.F = getEtq();

                cad += auxizq.Codigo;
                cad += "\t" + "if (" + auxizq.Valor + " == 0) goto " + auxizq.V + ";\n";
                cad += "\t" + "goto " + auxizq.F + ";\n";
            } else {
                cad += auxizq.Codigo;
            }

            cad += "\t" + auxizq.V + ":\n";


            if (auxder.V == "" && auxder.F == "") {
                auxder.V = getEtq();
                auxder.F = getEtq();

                cad += auxder.Codigo;
                cad += "\t" + "if (" + auxder.Valor + " == 0) goto " + auxder.V + ";\n";
                cad += "\t" + "goto " + auxder.F + ";\n";
            } else {
                cad += auxder.Codigo;
            }

            codigo3d.F = auxder.V;
            codigo3d.V = auxizq.F + ":\n\t" + auxder.F;

            codigo3d.Codigo = cad;
            codigo3d.Tipo = "bool";
        } else {
            insertarError("Semantico", "No se puede " + auxizq.Tipo + " && " + auxder.Tipo, this.Fila, this.Columna);
        }

        return codigo3d;
    };

    this.ResolverXor = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (auxizq.Tipo == "bool" && auxder.Tipo == "bool") {
            var cad = "";
            var etq1v = getEtq()
            var etq1f = getEtq();
            codigo3d.V = getEtq();
            codigo3d.F = getEtq();    
            var etq2f = getEtq();
            var temp1 = getTemp();
            var temp2 = getTemp();

            if (auxizq.V == "" && auxizq.F == "") {
                auxizq.V = getEtq();
                auxizq.F = getEtq();

                cad += auxizq.Codigo;
                cad += "\t" + "if (" + auxizq.Valor + " == 1) goto " + auxizq.V + ";\n";
                cad += "\t" + "goto " + auxizq.F + ";\n";
            } else {
                cad += auxizq.Codigo;
            }

            cad += "\t" + auxizq.V + ":\n";
            cad += "\t" + temp1 + " = 1;\n";
            cad += "\t" + "goto " + etq1v + ";\n";
            cad += "\t" + auxizq.F + ":\n";
            cad += "\t" + temp1 + " = 0;\n";
            cad += "\t" + etq1v + ":\n";




            if (auxder.V == "" && auxder.F == "") {
                auxder.V = getEtq();
                auxder.F = getEtq();

                cad += auxder.Codigo;
                cad += "\t" + "if (" + auxder.Valor + " == 1) goto " + auxder.V + ";\n";
                cad += "\t" + "goto " + auxder.F + ";\n";
            } else {
                cad += auxder.Codigo;
            }

            cad += "\t" + auxder.V + ":\n";
            cad += "\t" + temp2 + " = 1;\n";
            cad += "\t" + "goto " + etq1f + ";\n";
            cad += "\t" + auxder.F + ":\n";
            cad += "\t" + temp2 + " = 0;\n";
            cad += "\t" + etq1f + ":\n";

            cad += "\t" + "if (" + temp1 + " == " + temp2 + ") goto " + codigo3d.V + ";\n";
            cad += "\t" + "goto " + codigo3d.F + ";\n";

            codigo3d.Codigo = cad;
            codigo3d.Tipo = "bool";
        } else {
            insertarError("Semantico", "No se puede " + auxizq.Tipo + " |& " + auxder.Tipo, this.Fila, this.Columna);
        }

        return codigo3d;
    };

    this.ResolverNot = function (der) {
        var codigo3d = new Nodo3D();
        var auxder = der.Generar3D();

        if (auxder.Tipo == "bool") {
            var cad = "";          


            if (auxder.V == "" && auxder.F == "") {
                auxder.V = getEtq();
                auxder.F = getEtq();

                cad += auxder.Codigo;
                cad += "\t" + "if (" + auxder.Valor + " == 1) goto " + auxder.V + ";\n";
                cad += "\t" + "goto " + auxder.F + ";\n";
            } else {
                cad += auxder.Codigo;
            }
            
            codigo3d.V = auxder.F;
            codigo3d.F = auxder.V;

            codigo3d.Codigo = cad;
            codigo3d.Tipo = "bool";
        } else {
            insertarError("Semantico", "No se puede " + auxizq.Tipo + " || " + auxder.Tipo, this.Fila, this.Columna);
        }

        return codigo3d;
    };
}

function Metodo(tipo, nombre, fila, columna, parametros, simbolo){
    this.Tipo - tipo;
    this.Nombre = nombre;
    this.Fila = fila;
    this.Columna = columna;
    this.Parametros = parametros;
    this.Simbolo = simbolo;

    this.Ejecutar3D = function () {
        for (var i = 0; i < this.Simbolo.Hijos.length; i++){
            var hijo = this.Simbolo.Hijos[i];
            if (hijo.Rol == "etq" || hijo.Rol == "asignacion" || hijo.Rol =="llamada"){
                if (hijo.Rol == "asignacion"){
                    hijo.Valor.Ejecutar3D();
                }
            } else {
                if (hijo.Rol == "if"){
                    var resultado = hijo.Ejecutar3D();
                    if (resultado){
                        break;
                    }
                } else if ("goto"){
                    hijo.Ejecutar3D();
                    break;
                }
            }
        }
    };

    this.Generar3D = function () {

        var N3 = new Nodo3D();

        if (this.Nombre == "principal") {
            N3.Codigo += "void main";
        } else {
            N3.Codigo += "void " + this.Nombre;
        }

        for (var i = 0; i < this.Parametros.length; i++) {
            var par = this.Parametros[i];
            N3.Codigo += "_" + par.Tipo;
        }

        N3.Codigo += "(){\n";

        /*var tempretorno = getTemp();

        N3.Codigo += "\t" + tempretorno + " = P + 0;\n";
        N3.Codigo += "\t" + tempretorno + " = " + tempretorno + " + 1;\n";*/

        N3.Codigo += "\t" + "P = P + " + (this.Simbolo.Size + 1) + ";//cambio de ambito\n";

        for (var i = 0; i < this.Simbolo.Hijos.length; i++) {
            var n3daux = this.Simbolo.Hijos[i].Valor.Generar3D();
            N3.Codigo += n3daux.Codigo;
        }
        N3.Codigo += "\t" + "P = P - " + (this.Simbolo.Size + 1) + ";//cambio de ambito\n";
        N3.Codigo += "\t" + "$$_SGB(P , " + (this.Simbolo.Size + 1) + ");\n";
        N3.Codigo += "}\n\n";
        return N3;
    };
}

function Objeto(tipo, nombre, fila, columna, valor, hijo, simbolo) {
    this.Nombre = nombre;
    this.Tipo = tipo;
    this.Fila = fila;
    this.Columna = columna;
    this.Valor = valor;
    this.Hijo = hijo;
    this.Simbolo = simbolo;    

    this.InsertarHijo = function (h) {
        if (this.Hijo == null){
            this.Hijo = h;
        } else {
            this.Hijo.InsertarHijo(h);
        }
    };
}

function Declaracion(tipo, nombre, valor, simbolo) {
    this.Tipo = tipo;
    this.Nombre = nombre;
    this.Valor = valor;
    this.Simbolo = simbolo;

    this.Generar3D = function () {
        var N3 = new Nodo3D();
        var valor;
        
        if (this.Valor != null){
            var valor = this.Valor.Generar3D();
        } else {
            valor = new FNodoExpresion();
            valor.IniciarNodo(null, null, "null", "null", this.Simbolo.Fila, this.Simbolo.Columna, "null");
            valor = valor.Generar3D();
        }
        if (ContarErrores()) {
            
            if (this.Simbolo.Tipo == "num") {
                var tempstack = getTemp();
                var tempheap = getTemp();
                N3.Valor = tempheap;
                var cad = "";

                if (valor.Tipo == "num") {
                    cad += valor.Codigo;
                    cad += "\t" + tempstack + " = P" + " + " + (this.Simbolo.Pos + 1) + ";" + "//asignacion de " + this.Nombre + "\n";
                    cad += "\t" + tempheap + " = H" + ";\n";
                    cad += "\t" + "H = H + 1" + ";\n";
                    cad += "\t" + "Stack[" + tempstack + "] = " + tempheap + ";\n";                    
                    cad += "\t" + "Heap[" + tempheap + "] = " + valor.Valor + ";\n";
                    
                    
                } else if (valor.Tipo == "bool") {

                    cad += valor.Codigo;
                    cad += "\t" + tempstack + " = P" + " + " + (this.Simbolo.Pos + 1) + ";" + "\t//asignacion de " + this.Nombre + "\n";
                    cad += "\t" + tempheap + " = H" + ";\n";
                    cad += "\t" + "H = H + 1" + ";\n";
                    cad += "\t" + "Stack[" + tempstack + "] = " + tempheap + ";\n";
                    if (valor.V == "" && valor.F == "") {
                        cad += valor.Codigo;
                    } else {
                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += "\t" + valor.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + valor.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        valor.Valor = auxtemp;
                    }
                    cad += "\t" + "Heap[" + tempheap + "] = " + valor.Valor + ";\n";                    
                } else if (valor.Tipo == "null"){
                    cad += valor.Codigo;
                    cad += "\t" + tempstack + " = P" + " + " + (this.Simbolo.Pos + 1) + ";" + "//asignacion de " + this.Nombre + "\n";
                    cad += "\t" + tempheap + " = H" + ";\n";
                    cad += "\t" + "H = H + 1" + ";\n";
                    cad += "\t" + "Stack[" + tempstack + "] = " + tempheap + ";\n";                    
                    cad += "\t" + "Heap[" + tempheap + "] = " + valor.Valor + ";\n";
                } else {
                    insertarError("Sintactico", "No se puede asignar un tipo " + valor.Tipo + " a un tipo " + this.Simbolo.Tipo, this.Simbolo.Fila, this.Simbolo.Columna);
                }
                N3.Codigo = cad;
            } else if (this.Simbolo.Tipo == "bool") {
                var tempstack = getTemp();
                var tempheap = getTemp();
                N3.Valor = tempheap;
                var cad = "";

                if (valor.Tipo == "num") {
                    var etqv = getEtq();
                    var etqf = getEtq();
                    var etqsalida = getEtq();

                    var tmpnuevo = getTemp();
                    cad += valor.Codigo;
                    cad += "\t" + tempstack + " = P" + " + " + (this.Simbolo.Pos + 1) + ";" + "\t//asignacion de " + this.Nombre + "\n";
                    cad += "\t" + tempheap + " = H" + ";\n";
                    cad += "\t" + "H = H + 1" + ";\n";
                    cad += "\t" + "Stack[" + tempstack + "] = " + tempheap + ";\n";                    
                    cad += "\t" + "if (" + valor.Valor + " == 0) goto " + etqv + ";\n";
                    cad += "\t" + "goto " + etqf + ";\n";
                    cad += "\t" + etqv + ":\n";
                    cad += "\t" + tmpnuevo + " = 0;\n";
                    cad += "\t" + "goto " + etqsalida + ";\n"
                    cad += "\t" + etqf + ":\n";
                    cad += "\t" + tmpnuevo + " = 1;\n";
                    cad += "\t" + etqsalida + ":\n";
                    cad += "\t" + "Heap[" + tempheap + "] = " + tmpnuevo + ";\n";

                } else if (valor.Tipo == "bool") {
                    
                    if (valor.V == "" && valor.F == "") {
                        cad += valor.Codigo;
                        cad += "\t" + tempstack + " = P" + " + " + (this.Simbolo.Pos + 1) + ";" + "//asignacion de " + this.Nombre + "\n";
                        cad += "\t" + tempheap + " = H" + ";\n";
                        cad += "\t" + "H = H + 1" + ";\n";
                        cad += "\t" + "Stack[" + tempstack + "] = " + tempheap + ";\n";
                    } else {
                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += valor.Codigo;
                        cad += "\t" + valor.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + valor.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";
                        cad += "\t" + tempstack + " = P" + " + " + (this.Simbolo.Pos + 1) + ";" + "//asignacion de " + this.Nombre + "\n";
                        cad += "\t" + tempheap + " = H" + ";\n";
                        cad += "\t" + "H = H + 1" + ";\n";
                        cad += "\t" + "Stack[" + tempstack + "] = " + tempheap + ";\n";

                        valor.Valor = auxtemp;
                    }
                    cad += "\t" + "Heap[" + tempheap + "] = " + valor.Valor + ";\n";
                } else if (valor.Tipo == "null") {
                    cad += valor.Codigo;
                    cad += "\t" + tempstack + " = P" + " + " + (this.Simbolo.Pos + 1) + ";" + "//asignacion de " + this.Nombre + "\n";
                    cad += "\t" + tempheap + " = H" + ";\n";
                    cad += "\t" + "H = H + 1" + ";\n";
                    cad += "\t" + "Stack[" + tempstack + "] = " + tempheap + ";\n";
                    cad += "\t" + "Heap[" + tempheap + "] = " + valor.Valor + ";\n";
                } else {
                    insertarError("Sintactico", "No se puede asignar un tipo " + valor.Tipo + " a un tipo " + this.Simbolo.Tipo, this.Simbolo.Fila, this.Simbolo.Columna);
                }
                N3.Codigo = cad;
            } else if (this.Simbolo.Tipo == "str"){
                if (valor.Tipo == "num") {
                    var temppool = getTemp();
                    var tempstack = getTemp();
                    var tempheap = getTemp();
                    N3.Valor = tempheap;
                    var cad = "";
                    cad += valor.Codigo;                                       

                    cad += "\t" + temppool + " = S;\n";
                    //numero

                    cad += "\t" + "Pool[S] = -1;\n"; //asignamos bandera que es numero
                    cad += "\t" + "S = S + 1;\n";//aumentamos el puntero de S
                    cad += "\t" + "Pool[S] = " + valor.Valor + ";\n";//pasamos el valor del temporal al SP
                    cad += "\t" + "S = S + 1;\n";//aumentamos el puntero
                    cad += "\t" + "Pool[S] = -2;\n";//indicamos que terminan los numero
                    cad += "\t" + "S = S + 1;\n";//aumento del puntero

                    cad += "\t" + "Pool[S] = 0;\n";
                    cad += "\t" + "S = S + 1;\n";

                    cad += "\t" + tempstack + " = P" + " + " + (this.Simbolo.Pos + 1) + ";" + "//asignacion de " + this.Nombre + "\n";
                    cad += "\t" + tempheap + " = H" + ";\n";
                    cad += "\t" + "H = H + 1" + ";\n";
                    cad += "\t" + "Stack[" + tempstack + "] = " + tempheap + ";\n";
                    cad += "\t" + "Heap[" + tempheap + "] = " + temppool + ";\n";
                    
                } else if (valor.Tipo == "bool") {
                    var temppool = getTemp();
                    var tempstack = getTemp();
                    var tempheap = getTemp();
                    var cad = "";         

                    
                    if (valor.V == "" && valor.F == "") {
                        cad += valor.Codigo;
                    } else {
                        var auxtemp = getTemp();
                        var salida = getEtq();

                        cad += valor.Codigo;
                        cad += "\t" + valor.V + ":\n";
                        cad += "\t" + auxtemp + " = 1;\n";
                        cad += "\t" + "goto " + salida + ";\n";
                        cad += "\t" + valor.F + ":\n";
                        cad += "\t" + auxtemp + " = 0;\n";
                        cad += "\t" + salida + ":\n";

                        valor.Valor = auxtemp;
                    }

                    cad += "\t" + temppool + " = S;\n";
                    cad += "\t" + "Pool[S] = -1;\n"; //asignamos bandera que es numero
                    cad += "\t" + "S = S + 1;\n";//aumentamos el puntero de S
                    cad += "\t" + "Pool[S] = " + valor.Valor + ";\n";//pasamos el valor del temporal al SP
                    cad += "\t" + "S = S + 1;\n";//aumentamos el puntero
                    cad += "\t" + "Pool[S] = -2;\n";//indicamos que terminan los numero
                    cad += "\t" + "S = S + 1;\n";//aumento del puntero

                    cad += "\t" + "Pool[S] = 0;\n";
                    cad += "\t" + "S = S + 1;\n";

                    cad += "\t" + tempstack + " = P" + " + " + (this.Simbolo.Pos + 1) + ";" + "//asignacion de " + this.Nombre + "\n";
                    cad += "\t" + tempheap + " = H" + ";\n";
                    cad += "\t" + "H = H + 1" + ";\n";
                    cad += "\t" + "Stack[" + tempstack + "] = " + tempheap + ";\n";
                    cad += "\t" + "Heap[" + tempheap + "] = " + temppool + ";\n";
                    
                } else if (valor.Tipo == "str") {
                    var tempstack = getTemp();
                    var cad = "";
                    cad += valor.Codigo;
                    
                    cad += "\t" + tempstack + " = P" + " + " + (this.Simbolo.Pos + 1) + ";" + "//asignacion de " + this.Nombre + "\n";
                    
                    cad += "\t" + "Stack[" + tempstack + "] = " + valor.Valor + ";\n";
                } else if (valor.Tipo == "null") {
                    var tempstack = getTemp();
                    var tempheap = getTemp();
                    var cad = "";     

                    cad += valor.Codigo;
                    cad += "\t" + tempstack + " = P" + " + " + (this.Simbolo.Pos + 1) + ";" + "//asignacion de " + this.Nombre + "\n";
                    cad += "\t" + tempheap + " = H" + ";\n";
                    cad += "\t" + "H = H + 1" + ";\n";
                    cad += "\t" + "Stack[" + tempstack + "] = " + tempheap + ";\n";
                    cad += "\t" + "Heap[" + tempheap + "] = " + valor.Valor + ";\n";
                } else {
                    insertarError("Semantico", "No se puede asignar un " + valor.Tipo + " a un tipo str", this.Fila, this.Columna);
                }
                N3.Codigo = cad;
            } else {
                insertarError("Sintactico", "No se pudo hacer la asignacion", this.Simbolo.Fila, this.Simbolo.Columna);
            }
        }

        return N3;
    };
}

function DeclaracionArreglo(tipo, nombre, dimensiones, simbolo) {
    this.Tipo = tipo;
    this.Nombre = nombre;
    this.Dimensiones = dimensiones;
    this.Simbolo = simbolo;

    this.Generar3D = function () {
        var dimensiones = 1;

        for (var i = 0; i < this.Dimensiones.length; i++){
            dimensiones *= this.Dimensiones[i].getTamanio();
        }
        
        var N3 = new Nodo3D();
        if (ContarErrores()) {

            if (this.Simbolo.Tipo == "bool" || this.Simbolo.Tipo == "str" || this.Simbolo.Tipo == "num") {
                var cad = "";
                var tempstack = getTemp();
                var tempheap = getTemp();
                N3.Valor = tempheap;


                cad += "\t" + tempstack + " = P + " + ((this.Simbolo.Pos + 1)) + ";\n";
                cad += "\t" + "Stack[" + tempstack + "] = H;\n";

                for (var i = 0; i < dimensiones; i++){
                    cad += "\t" + "Heap[H] = " + Null + ";\n";
                    cad += "\t" + "H = H +1;\n";
                }

                N3.Codigo += cad;
            } else {
                insertarError("Sintactico", "No se puede declarar un arreglo de tipo " + this.Simbolo.Tipo, this.Simbolo.Fila, this.Simbolo.Columna);
            }
        }

        return N3;
    };
}

function Asignacion(objeto, valor, simbolo) {
    this.Objeto = objeto;
    this.Valor = valor;
    this.Simbolo = simbolo;



    this.Ejecutar3D = function () {
        
        if (this.Objeto.Tipo == "heap"){
            var pos = this.Objeto.Ejecutar3D();
            var val = this.Valor.Ejecutar3D();
            if (ContarErrores()) {
                if (val.Tipo == "num"){
                    Heap[parseInt(pos.Numero)] = val.Numero;
                    InsertarDatosTabla();
                } else {
                    insertarError("Sintactico","No se puede asignar un tipo no numerico al heap",this.Simbolo.Fila, this.Simbolo.Columna);
                }
            }
        } else if (this.Objeto.Tipo == "pool"){
            var pos = this.Objeto.Ejecutar3D();
            var val = this.Valor.Ejecutar3D();
            if (ContarErrores()) {
                if (val.Tipo == "num") {
                    Pool[parseInt(pos.Numero)] = val.Numero;
                    InsertarDatosTabla();

                } else {
                    insertarError("Sintactico", "No se puede asignar un tipo no numerico al heap", this.Simbolo.Fila, this.Simbolo.Columna);
                }
            }
        } else if (this.Objeto.Tipo == "stack"){
            var pos = this.Objeto.Ejecutar3D();
            var val = this.Valor.Ejecutar3D();
            if (ContarErrores()) {
                if (val.Tipo == "num") {
                    Stack[parseInt(pos.Numero)] = val.Numero;
                    InsertarDatosTabla();
                } else {
                    insertarError("Sintactico", "No se puede asignar un tipo no numerico al heap", this.Simbolo.Fila, this.Simbolo.Columna);
                }
            }
        } else if (this.Objeto.Tipo == "temp"){

            var valor = this.Valor.Ejecutar3D();
            if (ContarErrores()){
                if (valor.Tipo == "num") {
                    InsertarVariable(this.Simbolo.Nombre, valor.Numero);
                } else {
                    insertarError("Sintacico", "No se obtuvo ningun valor", this.Simbolo.Fila, this.Simbolo.Columna);
                }
            }
        } else if (this.Objeto.Tipo == "s"){
            var valor = this.Valor.Ejecutar3D();
            if (ContarErrores()) {
                if (valor.Tipo == "num") {
                    S = valor.Numero;
                } else {
                    insertarError("Sintacico", "No se puede asignar un tipo no numerico a S", this.Simbolo.Fila, this.Simbolo.Columna);
                }
            }
        } else if (this.Objeto.Tipo == "p") {
            var valor = this.Valor.Ejecutar3D();
            if (ContarErrores()) {
                if (valor.Tipo == "num") {
                    P = valor.Numero;
                } else {
                    insertarError("Sintacico", "No se puede asignar un tipo no numerico a P", this.Simbolo.Fila, this.Simbolo.Columna);
                }
            }
        } else if (this.Objeto.Tipo == "h") {
            var valor = this.Valor.Ejecutar3D();
            if (ContarErrores()) {
                if (valor.Tipo == "num") {
                    H = valor.Numero;
                } else {
                    insertarError("Sintacico", "No se puede asignar un tipo no numerico a H", this.Simbolo.Fila, this.Simbolo.Columna);
                }
            }
        }

    };
}

function AsignacionArreglo(objeto, dimensiones, valor, simbolo) {
    this.Objeto = objeto;
    this.Dimensiones = dimensiones;
    this.Valor = valor;
    this.Simbolo = simbolo;
}

function AsignacionMetodo(objeto, valor, simbolo) {
    this.Objeto = objeto;
    this.Valor = valor;
    this.Simbolo = simbolo;
}

function LlamadaMetodo(nombre, fila, columna, parametros, simbolo) {
    this.Nombre = nombre;
    this.Fila = fila;
    this.Columna = columna;
    this.Parametros = parametros;
    this.Simbolo = simbolo;
}

function LlamadaArreglo(nombre, fila, columna, dimensiones, simbolo) {
    this.Nombre = nombre;
    this.Fila = fila;
    this.Columna = columna;
    this.Dimensiones = dimensiones;
    this.Simbolo = simbolo;
}

function If(condicion, cuerpo, simbolo) {
    this.Condicion = condicion;
    this.Cuerpo = cuerpo;
    this.Simbolo = simbolo;

    this.Generar3D = function () {
        var condicion = this.Condicion.Generar3D();

        var cuerpo = "";
        for (var i = 0; i < this.Cuerpo.length; i++){
            cuerpo += this.Cuerpo[i].Generar3D();
        }
        var N3 = new Nodo3D();
        if (ContarErrores()) {
            N3.Codigo = condicion.Codigo;

            if (condicion.Tipo == "bool") {
                var cad = "";
                if (condicion.V != "" && condicion.F != "") {
                    cad += "\t" + condicion.V + ":\n";
                    cad += cuerpo; ////aqui va el cuerop si es verdadero
                    cad += "\t" + condicion.F + ":\n";
                } else {
                    condicion.V = getEtq();
                    condicion.F = getEtq();

                    cad += "\t" + "if (" + condicion.Valor + " == 1) goto " + condicion.V + ";\n";
                    cad += "\t" + "goto " + condicion.F + ";\n";
                    cad += "\t" + condicion.V + ":\n";
                    cad += cuerpo; ////aqui va el cuerop si es verdadero
                    cad += "\t" + condicion.F + ":\n";
                }
                N3.Codigo += cad;
            } else {
                insertarError("Sintactico", "Se esperaba un valor tipo bool", this.Simbolo.Fila, this.Simbolo.Columna);
            }
        }

        return N3;
    };
}

function IfElse(condicion, cuerpo, sino, simbolo) {
    this.Condicion = condicion;
    this.Cuerpo = cuerpo;
    this.Else = sino;
    this.Simbolo = simbolo;

    this.Generar3D = function () {
        var condicion = this.Condicion.Generar3D();
        var cuerpo = "";
        for (var i = 0; i < this.Cuerpo.length; i++) {
            cuerpo += this.Cuerpo[i].Generar3D();
        }

        var sino = "";
        for (var i = 0; i < this.Else.length; i++) {
            sino += this.Else[i].Generar3D();
        }

        var N3 = new Nodo3D();
        if (ContarErrores()) {
            N3.Codigo = condicion.Codigo;

            if (condicion.Tipo == "bool") {
                var cad = "";
                var salida = getEtq();
                if (condicion.V != "" && condicion.F != "") {
                    cad += "\t" + condicion.V + ":\n";
                    cad += cuerpo; ////aqui va el cuerop si es verdadero
                    cad += "\t" + "goto " + salida + ";\n";
                    cad += "\t" + condicion.F + ":\n";
                    cad += sino;//aquie va el cuerpo si es falso
                    cad += "\t" + salida + ":\n";
                } else {
                    condicion.V = getEtq();
                    condicion.F = getEtq();

                    cad += "\t" + "if (" + condicion.Valor + " == 1) goto " + condicion.V + ";\n";
                    cad += "\t" + "goto " + condicion.F + ";\n";
                    cad += "\t" + condicion.V + ":\n";
                    cad += cuerpo; ////aqui va el cuerop si es verdadero
                    cad += "\t" + "goto " + salida + ";\n";
                    cad += "\t" + condicion.F + ":\n";
                    cad += sino;//aquie va el cuerpo si es falso
                    cad += "\t" + salida + ":\n";
                }
                N3.Codigo += cad;
            } else {
                insertarError("Sintactico", "Se esperaba un valor tipo bool", this.Simbolo.Fila, this.Simbolo.Columna);
            }
        }

        return N3;
    };
}

function Switch(expresion, modo, casos, defecto, simbolo) {
    this.Expresion = expresion;
    this.Modo = modo;
    this.Casos = casos;
    this.Defecto = defecto;
    this.Simbolo = simbolo;
}

function Case(izq, der, cuerpo, simbolo) {
    this.Izq = izq;
    this.Der = der;
    this.Cuerpo = cuerpo;
    this.Simbolo = simbolo;
}

function While(condicion, cuerpo, simbolo) {
    this.Condicion = condicion;
    this.Cuerpo = cuerpo;
    this.Simbolo = simbolo;

    this.Generar3D = function () {
        var condicion = this.Condicion.Generar3D();
        var cuerpo = "";
        for (var i = 0; i < this.Cuerpo.length; i++) {
            cuerpo += this.Cuerpo[i].Generar3D();
        }
        var N3 = new Nodo3D();
        if (ContarErrores()) {
            N3.Codigo = condicion.Codigo;

            if (condicion.Tipo == "bool") {
                var cad = "";
                var retorno = getEtq();
                if (condicion.V != "" && condicion.F != "") {
                    cad += "\t" + retorno + ":\n";
                    cad += condicion.Codigo;
                    cad += "\t" + condicion.V + ":\n";
                    cad += cuerpo; ////aqui va el cuerop si es verdadero
                    cad += "\t" + "goto " + retorno + ";\n";
                    cad += "\t" + condicion.F + ":\n";
                } else {
                    condicion.V = getEtq();
                    condicion.F = getEtq();

                    cad += "\t" + retorno + ":\n";
                    cad += condicion.Codigo;
                    cad += "\t" + "if (" + condicion.Valor + " == 1) goto " + condicion.V + ";\n";
                    cad += "\t" + "goto " + condicion.F + ";\n";
                    cad += "\t" + condicion.V + ":\n";
                    cad += cuerpo; ////aqui va el cuerop si es verdadero
                    cad += "\t" + "goto " + retorno + ";\n";
                    cad += "\t" + condicion.F + ":\n";
                }
                N3.Codigo = cad;
            } else {
                insertarError("Sintactico", "Se esperaba un valor tipo bool", this.Simbolo.Fila, this.Simbolo.Columna);
            }
        }

        return N3;
    };
}

function Do(condicion, cuerpo, simbolo) {
    this.Condicion = condicion;
    this.Cuerpo = cuerpo;
    this.Simbolo = simbolo;

    this.Generar3D = function () {
        var condicion = this.Condicion.Generar3D();
        var cuerpo = "";
        for (var i = 0; i < this.Cuerpo.length; i++) {
            cuerpo += this.Cuerpo[i].Generar3D();
        }
        var N3 = new Nodo3D();
        if (ContarErrores()) {
            N3.Codigo = condicion.Codigo;

            if (condicion.Tipo == "bool") {
                var cad = "";
                if (condicion.V != "" && condicion.F != "") {

                    cad += "\t" + condicion.V + ":\n";
                    cad += cuerpo; ////aqui va el cuerop si es verdadero
                    cad += condicion.Codigo;
                    cad += "\t" + condicion.F + ":\n";
                } else {
                    condicion.V = getEtq();
                    condicion.F = getEtq();

                    cad += "\t" + condicion.V + ":\n";
                    cad += cuerpo; ////aqui va el cuerop si es verdadero
                    cad += condicion.Codigo;
                    cad += "\t" + "if (" + condicion.Valor + " == 1) goto " + condicion.V + ";\n";
                    cad += "\t" + "goto " + condicion.F + ";\n";
                    cad += "\t" + condicion.F + ":\n";
                }
                N3.Codigo = cad;
            } else {
                insertarError("Sintactico", "Se esperaba un valor tipo bool", this.Simbolo.Fila, this.Simbolo.Columna);
            }
        }

        return N3;
    };
}

function Repeat(condicion, cuerpo, simbolo) {
    this.Condicion = condicion;
    this.Cuerpo = cuerpo;
    this.Simbolo = simbolo;

    this.Generar3D = function () {
        var condicion = this.Condicion.Generar3D();
        var cuerpo = "";
        for (var i = 0; i < this.Cuerpo.length; i++) {
            cuerpo += this.Cuerpo[i].Generar3D();
        }
        var N3 = new Nodo3D();
        if (ContarErrores()) {
            N3.Codigo = condicion.Codigo;

            if (condicion.Tipo == "bool") {
                var cad = "";
                var retorno = getEtq();
                if (condicion.V != "" && condicion.F != "") {
                    cad += "\t" + retorno + ":\n";
                    cad += condicion.Codigo;
                    cad += "\t" + condicion.F + ":\n";
                    cad += cuerpo; ////aqui va el cuerop si es verdadero
                    cad += "\t" + "goto " + retorno + ";\n";
                    cad += "\t" + condicion.V + ":\n";
                } else {
                    condicion.V = getEtq();
                    condicion.F = getEtq();

                    cad += "\t" + retorno + ":\n";
                    cad += condicion.Codigo;
                    cad += "\t" + "if (" + condicion.Valor + " == 1) goto " + condicion.V + ";\n";
                    cad += "\t" + "goto " + condicion.F + ";\n";
                    cad += "\t" + condicion.F + ":\n";
                    cad += cuerpo; ////aqui va el cuerop si es verdadero
                    cad += "\t" + "goto " + retorno + ";\n";
                    cad += "\t" + condicion.V + ":\n";
                }
                N3.Codigo = cad;
            } else {
                insertarError("Sintactico", "Se esperaba un valor tipo bool", this.Simbolo.Fila, this.Simbolo.Columna);
            }
        }

        return N3;
    };
}

function For(anterior, condicion, posterior, cuerpo, simbolo) {
    this.Anterior = anterior;
    this.Condicion = condicion;
    this.Posterior = posterior;
    this.Cuerpo = cuerpo;
    this.Simbolo = simbolo;

    this.Generar3D = function () {
        //var variable = this.Anterior.Generar3D();
        var condicion = this.Condicion.Generar3D();
        //var actualizacion = this.Posterior.Generar3D();
        //var instrucciones = this.Cuerpo.Generar3D();

        var N3 = new Nodo3D();
        if (ContarErrores()) {
            N3.Codigo = condicion.Codigo;

            if (condicion.Tipo == "bool") {
                var cad = "";
                var retorno = getEtq();
                var actualizar = getEtq();
                if (condicion.V != "" && condicion.F != "") {
                    cad += "\tasignacion;\n";//asignacion de variables
                    cad += "\t" + retorno + ":\n";
                    cad += condicion.Codigo;
                    cad += "\t" + actualizar + ":\n";
                    cad += "\tactualizacion;\n";//actualizacion de varaibles
                    cad += "\t" + "goto " + retorno + ";\n";
                    cad += "\t" + condicion.V + ":\n";
                    cad += ""; ////aqui va el cuerop si es verdadero
                    cad += "\t" + condicion.F + ":\n";
                } else {
                    condicion.V = getEtq();
                    condicion.F = getEtq();

                    cad += "\tasignacion;\n";//asignacion de variables
                    cad += "\t" + retorno + ":\n";
                    cad += condicion.Codigo;
                    cad += "\t" + "if (" + condicion.Valor + " == 1) goto " + condicion.V + ";\n";
                    cad += "\t" + "goto " + condicion.F + ";\n";
                    cad += "\t" + actualizar + ":\n";
                    cad += "\tactualizacion;\n";//actualizacion de varaibles
                    cad += "\t" + "goto " + retorno + ";\n";
                    cad += "\t" + condicion.V + ":\n";
                    cad += ""; ////aqui va el cuerop si es verdadero
                    cad += "\t" + condicion.F + ":\n";
                }
                N3.Codigo = cad;
            } else {
                insertarError("Sintactico", "Se esperaba un valor tipo bool", this.Simbolo.Fila, this.Simbolo.Columna);
            }
        }

        return N3;
    };
}

function Element(nombre, cuerpo, simbolo) {
    this.Nombre = nombre;
    this.Cuerpo = cuerpo;
    this.Simbolo = simbolo;


    this.Generar3D = function () {
        var N3 = new Nodo3D();
        
        for (var i = 0; i < this.Simbolo.Hijos.length; i++) {
            var n3daux = this.Simbolo.Hijos[i].Valor.Generar3D();
            N3.Codigo += n3daux.Codigo;
        }
        return N3;
    };
}

function Dimension(bot, top) {
    this.Bot = parseInt(bot);
    this.Top = parseInt(top);
        

    this.getTamanio = function () {
        return this.Top - this.Bot + 1;
    };
}

function Primitiva(nombre, izq, centro, der, simbolo) {
    this.Nombre = nombre;
    this.Izq = izq;
    this.Centro = centro;
    this.Der = der;
    this.Simbolo = simbolo;
}