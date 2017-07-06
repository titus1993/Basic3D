var TablaVariables = null;
var Heap = null;
var Stack = null;
var Pool = null;
var TablaHeap = null;
var TablaStack = null;
var TablaPool = null;
var S, H, P = 0;

function LimpiarEjecucion() {
    TablaVariables = new Array();
    Heap = [];
    Stack = [];
    Pool = [];
    S = 0;
    P = 0;
    H = 0;
    ReporteErrores = document.getElementById("tablaerrores");
    TablaHeap = document.getElementById("THeap");
    TablaPool = document.getElementById("TPool");
    TablaStack = document.getElementById("TStack");
    
    limpiarReporteErrores();
    LimpiarDatosTabla();
    
}


function LimpiarDatosTabla() {
    var size = TablaHeap.rows.length;

    for (var i = size - 1; i > 0; i--) {
        TablaHeap.deleteRow(i);
    }

    size = TablaStack.rows.length;

    for (var i = size - 1; i > 0; i--) {
        TablaStack.deleteRow(i);
    }

    size = TablaPool.rows.length;

    for (var i = size - 1; i > 0; i--) {
        TablaPool.deleteRow(i);
    }
}

function InsertarDatosTabla() {
    LimpiarDatosTabla();
    InsertarDatosTablaHeap();
    InsertarDatosTablaPool();
    InsertarDatosTablaStack();
}

function InsertarDatosTablaHeap() {
    document.getElementById("TituloHeap").innerHTML = "Heap = " + H.toString();
    for (var i = 0; i < Heap.length; i++){
        var row = TablaHeap.insertRow(TablaHeap.rows.length);
        var count = row.insertCell(0);
        var cell1 = row.insertCell(1);
        count.innerHTML = i;
        cell1.innerHTML = Heap[i].toString();
    }    
}

function InsertarDatosTablaPool() {
    document.getElementById("TituloPool").innerHTML = "String Pool = " + S.toString();
    for (var i = 0; i < Pool.length; i++) {
        var row = TablaPool.insertRow(TablaPool.rows.length);
        var count = row.insertCell(0);
        var cell1 = row.insertCell(1);
        count.innerHTML = i;
        cell1.innerHTML = Pool[i].toString();
    }
}

function InsertarDatosTablaStack() {
    document.getElementById("TituloStack").innerHTML = "Stack = " + P.toString();
    for (var i = 0; i < Stack.length; i++) {
        var row = TablaStack.insertRow(TablaStack.rows.length);
        var count = row.insertCell(0);
        var cell1 = row.insertCell(1);
        count.innerHTML = i;
        cell1.innerHTML = Stack[i].toString();
    }
}


function Ejecutar3D() {
    LimpiarEjecucion();
    var principal = BuscarMain();
    if (principal != null){
        principal.Valor.Ejecutar3D();
        InsertarDatosTabla();
        
    } else {
        insertarError("Sintactico", "No se encontro un metodo main para ejecutar.", 1, 1);
    }
}


function Variable(nombre, valor) {
    this.Nombre = nombre;
    this.Valor = valor;
}

function InsertarVariable(nombre, valor) {
    var temp = BuscarVariable(nombre);

    if (temp != null){
        temp.Valor = valor;
    } else {
        var nueva = new Variable(nombre, valor);
        TablaVariables.push(nueva);
    }
}

function BuscarVariable(nombre) {
    var estado = null;

    for (var i = TablaVariables.length - 1; i >= 0; i--){
        var variable = TablaVariables[i];
        if (variable.Nombre == nombre){
            estado = variable;
            break;
        }
    }
    return estado;
}

function BuscarMain() {
    var main = null;

    for (var i = 0; i < Tabla3D.length; i++){
        var sim = Tabla3D[i];
        if (sim.Nombre == "main"){
            main = sim;
        }
    }

    return main;
}
