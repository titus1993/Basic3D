//importScripts('archivo2');
///<reference path="archivo2.js" />
///<reference path="../Ejecucion/Funciones.js" />
///<reference path="../Ejecucion/Herramientas.js"/>
function decirhola1() {
    var h = new clase("hola ");
    var g = new clase(" titus");


    var hijo = new FNodoExpresion;

    hijo.IniciarNodo(null, null, "Numero", "Numero", 5, 6, 7);
    var padre = new FNodoExpresion();
    padre.IniciarNodo(hijo, null, null, null, null, null, null);

    

    insertarError("sintactico", "se esparaba XD", "1", "2");

    
    return h.hola + " " + g.gethola() + " " + padre.Izquierda.Nombre + " " + ContarErrores();
}
