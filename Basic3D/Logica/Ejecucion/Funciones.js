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
                if (valor == "true"){
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
        var codigo3d = "";      
       
        codigo3d = this.Generar3D(this);
        
        return codigo3d;
    };

    this.Generar3D = function (nodo) {
        var codigo3d = "";

        switch (nodo.Tipo){
            case "num":

                break;

            case "str":
                break;

            case "bool":
                break;

            case "temp":
                break;

            case "+":
                break;

            case "-":
                break;

            case "*":
                break;

            case "/":
                break;

            case "%":
                break;

            case "^":
                break;

            case "==":
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
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverResta = function (izq, der) {
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverMultiplicacion = function (izq, der) {
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverDivision = function (izq, der) {
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverModulo = function (izq, der) {
        var codigo3d = "";

        return codigo3d;
    };

    this.ResolverIgualacion = function (izq, der) {
        var codigo3d = "";

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

function If(condicion, cuerpo, simbolo) {
    this.Condicion = condicion;
    this.Cuerpo = cuerpo;
    this.Simbolo = simbolo;
}

function If(condicion, cuerpo, sino, simbolo) {
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