<%@ Page Title="" Language="C#" MasterPageFile="~/MaestraAvanzado.master" AutoEventWireup="true" CodeBehind="Avanzado.aspx.cs" Inherits="Basic3D.Avanzado" %>

<asp:Content ID="Edicion" ContentPlaceHolderID="Edicion" runat="server">
    <div id="Controles" style ="margin-bottom:1%;">
        <button id="analizar" onclick="return Analizar()">Analizar Principal</button>
        <button id="analizarelementos" onclick="return AnalizarElementos()">Analizar Elementos</button>        
    </div>

    <div id="Editores" style="margin-left: 1%; margin-right: 1%;">
        <div id="codeeditor" style="width: 45%; float: left; margin-right: 2.5%; height: 100%;"></div>
        <script> 
            var sc = document.getElementById("modecode");
            var editor = CodeMirror(document.getElementById("codeeditor"), {
                mode: "basic3d_elements",
                theme: "ambiance",
                lineNumbers: true,
                extraKeys: { "Ctrl-Space": "autocomplete" }
            });
        </script>
        <div id="elementos" style="width: 45%; float: left; margin-left: 2.5%; height: 100%;"></div>
        <script>
            var editorelementos = CodeMirror(document.getElementById("elementos"), {
                mode: "basic3d_elements",
                theme: "ambiance",
                lineNumbers: true,
                extraKeys: { "Ctrl-Space": "autocomplete" }                
            });
        </script>
    </div>
   <script src="Logica/Analisis/archivo1.js"></script>
    <script src="Logica/Analisis/archivo2.js"></script>
    <script src="Logica/Gramatica/Basic3DElements.js"></script>
    <script src="Logica/Gramatica/Basic3D.js"></script>
    <script src="Logica/Ejecucion/Funciones.js"></script>
    <script src="Logica/Ejecucion/Herramientas.js"></script>

    <script>
        ///<reference path="Logica/Gramatica/Basic3D.js" />
            function AnalizarElementos() {
                try {
                    this.raiz = Basic3DElements.parse(editorelementos.getValue());
                } catch(error){
                    alert(error.message);
                }
                
                /*if (a == undefined) {
                    alert("se econtraro errores");
                } else {

                    editor.setValue(a+'\n');
                }*/
                alert(decirhola1());
                return false;
                //var elemento = document.getElementById("elementos");
                //elemento.textContent = entrada.textContent;

            }

            function Analizar() {
                try {
                    this.raiz = Basic3D.parse(editor.getValue());
                } catch (error) {
                    alert(error.message);
                }

                /*if (a == undefined) {
                    alert("se econtraro errores");
                } else {

                    editor.setValue(a+'\n');
                }*/
                alert(decirhola1());
                return false;
                //var elemento = document.getElementById("elementos");
                //elemento.textContent = entrada.textContent;

            }
    </script>

</asp:Content>
