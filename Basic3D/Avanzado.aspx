<%@ Page Title="" Language="C#" MasterPageFile="~/MaestraAvanzado.master" AutoEventWireup="true" CodeBehind="Avanzado.aspx.cs" Inherits="Basic3D.Avanzado" %>

<asp:Content ID="Edicion" ContentPlaceHolderID="Edicion" runat="server">
    <div id="Controles" style ="margin-bottom:1%;">
        <button id="analizar" onclick="return Analizar()">Analizar</button>
    </div>

    <div id="Editores" style="margin-left: 1%; margin-right: 1%;">
        <div id="codeeditor" style="width: 45%; float: left; margin-right: 2.5%; height: 80%;"></div>
        <script> 
            var sc = document.getElementById("modecode");
            var code = CodeMirror(document.getElementById("codeeditor"), {
                mode: "basic3d",
                theme: "ambiance",
                lineNumbers: true,
                extraKeys: { "Ctrl-Space": "autocomplete" }
            });
        </script>
        <div id="elementos" style="width: 45%; float: left; margin-left: 2.5%; height: 100%;"></div>
        <script>
            var editor = CodeMirror(document.getElementById("elementos"), {
                mode: "basic3d",
                theme: "ambiance",
                lineNumbers: true,
                extraKeys: { "Ctrl-Space": "autocomplete" }
            });
            
        </script>
    </div>
   <script src="Logica/Analisis/archivo1.js"></script>
    <script src="Logica/Analisis/archivo2.js"></script>

    <script>
            function Analizar() {
                editor.setValue(code.getValue());
                alert(decirhola1());
                return false;
                //var elemento = document.getElementById("elementos");
                //elemento.textContent = entrada.textContent;

            }
    </script>

</asp:Content>
