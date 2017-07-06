var Debug = false;
var EjecutarDebug = null;
function Ejecutar3Debugg() {

    LimpiarEjecucion();

    this.Next = function () {
        if (Actual != null) {
            if (Actual.Rol == "asignacion") {
                TBDebug.focus();
                TBDebug.setCursor({ line: Actual.Fila - 1, ch: 0 });
                Actual.Valor.Ejecutar3D();
                Actual = Actual.Siguiente;
            }
        } else {
            window.clearInterval(Inter);
            Debug = false
        }
    };

    var Actual = null;

    var principal = BuscarMain();

    if (principal != null) {
        if (principal.Hijos.length > 0) {
            Debug = true;
            Actual = principal.Hijos[0];
            this.Next();
        } else {
            Debug = false;
        }

    } else {
        insertarError("Sintactico", "No se encontro un metodo main para ejecutar.", 1, 1);
    }
}