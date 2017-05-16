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
                break;

            case ">":
                break;

            case "<":
                break;

            case "<=":
                break;

            case ">=":
                break;

            case "||":
                break;

            case "|?":
                break;

            case "&&":
                break;

            case "&?":
                break;

            case "|&":
                break;

            case "!":
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
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " + " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool"){
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " + " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
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
                    cad += "\t" + "if (" + auxpool2 + " == 0) goto " + auxetqifsalida + "\n";
                    cad += "\t" + "Pool[S] = " + auxpool2 + ";\n";//asignamos el valor de cada caracter al temporal
                    cad += "\t" + "S = S + 1;\n";//asignamos la siguiente posicion del pool
                    cad += "\t" + auxpool + " = " + auxpool + " + 1;\n";//obtenemos el nuevo valor del heap
                    cad += "\t" + auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" + "goto " + auxetqif + ";\n";// salto para volver a evaluar el pool
                    cad += "\t" + auxetqifsalida + ":\n";//etq de salida por si el if es verdadero
                    cad += "\t" + "Pool[S] = 0;\n";
                    cad += "\t" + "S = S + 1;\n";
                    
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;//asignamos la cadena al nodo de retorno
                    codigo3d.Tipo = "num";//asignamos el tipo de dato
                }
            } else if (auxizq.Tipo == "bool") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " + " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " + " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "str") {
                    var cad = "";
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
                    cad += "\t" + "if (" + auxpool2 + " == 0) goto " + auxetqifsalida + "\n";
                    cad += "\t" + "Pool[S] = " + auxpool2 + ";\n";//asignamos el valor de cada caracter al temporal
                    cad += "\t" + "S = S + 1;\n";//asignamos la siguiente posicion del pool
                    cad += "\t" + auxpool + " = " + auxpool + " + 1;\n";//obtenemos el nuevo valor del heap
                    cad += "\t" + auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" + "goto " + auxetqif + ";\n";// salto para volver a evaluar el pool
                    cad += "\t" + auxetqifsalida + ":\n";//etq de salida por si el if es verdadero
                    cad += "\t" + "Pool[S] = 0;\n";
                    cad += "\t" + "S = S + 1;\n";

                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;//asignamos la cadena al nodo de retorno
                    codigo3d.Tipo = "num";//asignamos el tipo de dato
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
                    cad += "\t" +"if (" + auxpool2 + " == 0) goto " + auxetqifsalida + "\n";
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

                    //cadena 1
                    var auxpool = getTemp();

                    var auxetqif = getEtq();
                    var auxetqifsalida = getEtq();

                    var auxpool2 = getTemp();

                    cad += "\t" +auxpool + " = " + "Heap[" + auxizq.Valor + "];\n";
                    cad += "\t" +auxpool2 + " = " + "Pool[" + auxpool + "];\n";
                    cad += "\t" +auxetqif + ":\n";
                    cad += "\t" +"if (" + auxpool2 + " == 0) goto " + auxetqifsalida + "\n";
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

                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;//asignamos la cadena al nodo de retorno
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
                    cad += "\t" +"if (" + auxpool2 + " == 0) goto " + auxetqifsalida + "\n";
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
                    cad += "\t" +"if (" + auxpool2 + " == 0) goto " + auxetqifsalida + "\n";
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
                }
            }
        }
        return codigo3d;
    };

    this.ResolverResta = function (izq, der) {
        var codigo3d = new Nodo3D();
        var auxizq = izq.Generar3D();
        var auxder = der.Generar3D();

        if (ContarErrores()) {
            if (auxizq.Tipo == "num") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " - " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " - " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " - " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else if (auxizq.Tipo == "bool") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " - " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " - " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else{
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " - " + auxder.Tipo, this.Fila, this.Columna);dato
                }
            } else{
                insertarError("Semantico", "No se puede " + auxizq.Tipo + " - " + auxder.Tipo, this.Fila, this.Columna);
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
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " * " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " * " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "str") {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " * " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else if (auxizq.Tipo == "bool") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " * " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " * " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else  {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " * " + auxder.Tipo, this.Fila, this.Columna); dato
                }
            } else{
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
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " / " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " / " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " / " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else if (auxizq.Tipo == "bool") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " / " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";                
                } else{
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " / " + auxder.Tipo, this.Fila, this.Columna); dato
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
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " % " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " % " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " % " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else if (auxizq.Tipo == "bool") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " % " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " % " + auxder.Tipo, this.Fila, this.Columna); dato
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
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " ^ " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " ^ " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " ^ " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else if (auxizq.Tipo == "bool") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " ^ " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " ^ " + auxder.Tipo, this.Fila, this.Columna); dato
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
            if (auxizq.Tipo == "num") {
                if (auxder.Tipo == "num") {
                    var cad = "";

                    codigo3d.V = getEtq();
                    codigo3d.F = getEtq();

                    cad += "\t" + "if (" + auxizq.Valor + " = " + auxder.Valor + ") goto " + codigo3d.V + "\n";
                    cad += "\t" + "goto " + codigo3d.F + ";\n";
 
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else if (auxder.Tipo == "bool") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " ^ " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " ^ " + auxder.Tipo, this.Fila, this.Columna);
                }
            } else if (auxizq.Tipo == "bool") {
                if (auxder.Tipo == "num") {
                    var cad = "";
                    codigo3d.Valor = getTemp()
                    cad = "\t" + codigo3d.Valor + " = " + auxizq.Valor + " ^ " + auxder.Valor + ";\n";
                    codigo3d.Codigo = auxizq.Codigo + auxder.Codigo + cad;
                    codigo3d.Tipo = "num";
                } else {
                    insertarError("Semantico", "No se puede " + auxizq.Tipo + " ^ " + auxder.Tipo, this.Fila, this.Columna); dato
                }
            } else {
                insertarError("Semantico", "No se puede " + auxizq.Tipo + " ^ " + auxder.Tipo, this.Fila, this.Columna);
            }
        }
        return codigo3d;
    };

    this.ResolverDiferenciacion = function (izq, der) {
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverMayor = function (izq, der) {
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverMenor = function () {
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverMayorIgual = function (izq, der) {
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverMenorIgual = function (izq, der) {
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverOr = function (izq, der) {
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverNor = function (izq, der) {
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverAnd = function (izq, der) {
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverNand = function (izq, der) {
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverXor = function (izq, der) {
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverNot = function (der) {
        var codigo3d = "";

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

    this.Generar3D = function () {
        var N3 = new Nodo3D();

        N3.Codigo += "void " + this.Nombre;

        for (var i = 0; i < this.Parametros.length; i++){
            var par = this.Parametros[i];
            N3.Codigo += "_" + par.Tipo;
        }

        N3.Codigo += "(){\n";

        for (var i = 0; i < this.Simbolo.Hijos.length; i++){
            var n3daux = this.Simbolo.Hijos[i].Valor.Generar3D();
            N3.Codigo += n3daux.Codigo;
        }

        N3.Codigo += "}\n\n";
        return N3;
    }
}

function Objeto(tipo, nombre, fila, columna, valor, hijo, simbolo) {
    this.Nombre = nombre;
    this.Tipo = tipo;
    this.Fila = fila;
    this.Columna = columna;
    this.Valor = valor;
    this.Hijo = hijo;
    this.Simbolo = simbolo;    
}

function Declaracion(tipo, nombre, fila, columna, valor, simbolo) {
    this.Tipo = tipo;
    this.Nombre = nombre;
    this.Fila = fila;
    this.Columna = columna;
    this.Valor = valor;
    this.Simbolo = simbolo;
}

function DeclaracionArreglo(tipo, nombre, fila, columna, dimensiones, simbolo) {
    this.Tipo = tipo;
    this.Nombre = nombre;
    this.Fila = fila;
    this.Columna = columna;
    this.Dimensiones = dimensiones;
    this.Simbolo = simbolo;
}

function Asignacion(objeto, fila, columna, valor, simbolo) {
    this.Objeto = objeto;
    this.Fila = fila;
    this.Columna = columna;
    this.Valor = valor;
    this.Simbolo = simbolo;
}

function AsignacionArreglo(objeto, fila, columna, dimensiones, valor, simbolo) {
    this.Objeto = objeto;
    this.Fila = fila;
    this.Columna = columna;
    this.Dimensiones = dimensiones;
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

function LlamadaArreglo(nombre, dimensiones, fila, columna, simbolo) {
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
        var N3 = new Nodo3D();
        N3.Codigo = condicion.Codigo;
        return N3;
    }
}

function IfElse(condicion, cuerpo, sino, simbolo) {
    this.Condicion = condicion;
    this.Cuerpo = cuerpo;
    this.Else = sino;
    this.Simbolo = simbolo;
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

function While(condicion, simbolo) {
    this.Condicion = condicion;
    this.Simbolo = simbolo;
}

function Do(condicion, simbolo) {
    this.Condicion = condicion;
    this.Simbolo = simbolo;
}

function Repeat(condicion, cuerpo, simbolo) {
    this.Condicion = condicion;
    this.Cuerpo = cuerpo;
    this.Simbolo = simbolo;
}

function For(anterior, condicion, posterior, cuerpo, simbolo) {
    this.Anterior = anterior;
    this.Condicion = condicion;
    this.Posterior = posterior;
    this.Cuerpo = cuerpo;
    this.Simbolo = simbolo;
}