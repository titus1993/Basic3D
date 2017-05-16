var ValorTemporal = 0;
var ValorEtiqueta = 0;

var TablaSimbolos = null;

var ReporteSimbolos = null;

var ReporteErrores = null;

function InicializarHerramientas() {
    ValorTemporal = 0;
    TablaSimbolos = null;
    ReporteSimbolos = document.getElementById("tablasimbolo");
    ReporteErrores = document.getElementById("tablaerrores");
    limpiarReporteSimbolo();
    limpiarReporteErrores();
}

function limpiarReporteSimbolo() {
    var size = ReporteSimbolos.rows.length;
    var i = size;
    for (i = size - 1; i > 0; i--) {
        ReporteSimbolos.deleteRow(i);
    }
}

function insertarReporteSimbolo(rol, tipo, ambito, nombre, size, pos) {
    var row = ReporteSimbolos.insertRow(ReporteSimbolos.rows.length);
    var count = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    count.innerHTML = ReporteSimbolos.rows.length - 1;
    cell1.innerHTML = rol;
    cell2.innerHTML = tipo;
    cell3.innerHTML = ambito;
    cell4.innerHTML = nombre;
    cell5.innerHTML = size.toString();
    cell6.innerHTML = pos.toString();
}

function generarReporteSimbolos() {
    if (TablaSimbolos.length > 0) {
        for (var i = 0; i < TablaSimbolos.length; i++){
            var sim = TablaSimbolos[i];

            if (sim.Rol == "declaracion"){
                insertarReporteSimbolo(sim.Rol, sim.Tipo, "global", sim.Nombre, sim.Size, sim.Pos);
            } else if (sim.Rol == "metodo" || sim.Rol == "principal") {
                if (sim.Hijos.length > 0) {
                    insertarReporteSimbolo(sim.Rol, sim.Tipo, "global", sim.Nombre, sim.Size, sim.Pos);
                    generarReporteSimbolos2(sim.Hijos, sim.Nombre);
                }
            }
        }
    }
}

function generarReporteSimbolos2(simbolo, ambito) {
    for (var i = 0; i < simbolo.length; i++){
        var sim = simbolo[i];

        if (simbolo[i].Rol == "declaracion") {            
            insertarReporteSimbolo(sim.Rol, sim.Tipo, ambito, sim.Nombre, sim.Size, sim.Pos);
        } else {
            if (sim.Hijos.length > 0) {
                insertarReporteSimbolo(sim.Rol, sim.Tipo, ambito, sim.Nombre, sim.Size, sim.Pos);
                generarReporteSimbolos2(sim.Hijos, ambito + "_" + sim.Nombre);       
            }     
        }
        
    }
}

function insertarError(tipo, descripcion, fila, columna) {
    var row = ReporteErrores.insertRow(ReporteErrores.rows.length);
    var count = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    count.innerHTML = ReporteErrores.rows.length - 1;
    cell1.innerHTML = tipo;
    cell2.innerHTML = descripcion;
    cell3.innerHTML = fila;
    cell4.innerHTML = columna;
}

function limpiarReporteErrores() {
    var size = ReporteErrores.rows.length;
   
    for (var i = size - 1; i > 0; i--) {
        ReporteErrores.deleteRow(i);
    }
}


function ContarErrores () {
    var estado = true;

    for (var i = 0; i < ReporteErrores.rows.length - 1; i++){
        if (ReporteErrores.rows[i].cells[1].innerHTML != "Excepcion"){
            estado = !estado;
            break;
        }
    }
    return estado;
}

function getTemp() {
    var temp = "t" + ValorTemporal.toString();
    ValorTemporal++;
    return temp;
}
function getEtq() {
    var temp = "L" + ValorEtiqueta.toString();
    ValorEtiqueta++;
    return temp;
}








