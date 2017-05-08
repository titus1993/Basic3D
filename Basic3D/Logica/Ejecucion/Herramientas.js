

var Errores = new Array();

var ValorTemporal = 0;

function insertarError(tipo, descripcion, fila, columna) {
    var error = new Error(tipo, descripcion, fila, columna);    
    Errores.push(error);
}


function Error(tipo, descripcion, fila, columna) {
    this.Tipo = tipo;
    this.Descripcion = descripcion;
    this.Fila = fila;
    this.Columna = columna;
}


function ContarErrores () {
    var estado = false;

    if (Errores.length > 0){
        estado = !estado;
    }

    return estado;
}

function getTemp() {
    var temp = "t" + ValorTemporal.toString();
    ValorTemporal++;
    return temp;
}




