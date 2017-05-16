///<reference path="../Ejecucion/Simbolo.js"/>
///<reference path="../Ejecucion/Herramientas.js"/>
///<reference path="../Ejecucion/Funciones.js"/>

function GeneracionC3D() {
    var N3D = new Nodo3D();
    for (var i = 0; i < TablaSimbolos.length; i++){
        var sim = TablaSimbolos[i];
        var n3daux = sim.Valor.Generar3D();
        N3D.Codigo = n3daux.Codigo;
    }    

    editorelementos.setValue(N3D.Codigo);
}