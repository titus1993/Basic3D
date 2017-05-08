
var titus="hola";

function clase(hola) {
    //alert(hola);
    this.hola = hola;
    this.adios = "";
}

clase.prototype.gethola = function () {
    
    return this.hola;
};
