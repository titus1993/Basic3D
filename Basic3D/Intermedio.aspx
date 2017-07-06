<%@ Page Title="" Language="C#" MasterPageFile="~/MaestraIntermedio.master" AutoEventWireup="true" CodeBehind="Intermedio.aspx.cs" Inherits="Basic3D.Intermedio" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Edicion" runat="server">
<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">
  <category name="Objetos" colour="#5b5ba5">
    <block type="principal"></block>
    <block type="metodo">
      <field name="tipo">void</field>
      <field name="nombre">metodo1</field>
      <field name="parametros"></field>
    </block>
    <block type="element">
      <field name="nombre">nodo</field>
    </block>
  </category>
</xml>
    <xml xmlns="http://www.w3.org/1999/xhtml" id="workspaceBlocks" style="display: none"></xml>
    <script src="Librerias/Blocky/blockly_compressed.js"></script>
    <script src="Librerias/Blocky/blocks_compressed.js"></script>
    <script src="Librerias/Blocky/javascript_compressed.js"></script>
    <script src="Librerias/Blocky/msg/js/es.js"></script>
    <script src="Logica/Analisis/archivo1.js"></script>
    <script src="Logica/Analisis/archivo2.js"></script>
    <script src="Logica/Gramatica/Basic3DElements.js"></script>
    <script src="Logica/Gramatica/Basic3D.js"></script>
    <script src="Logica/Ejecucion/Funciones.js"></script>
    <script src="Logica/Ejecucion/Herramientas.js"></script>
    <script src="Logica/Ejecucion/Simbolo.js"></script>

    <div id="Controles" style ="margin-bottom:1%;">
        <button id="analizar" onclick="return Analizar()">Analizar Principal</button>
        <button id="analizarelementos" onclick="return AnalizarElementos()">Analizar Elementos</button>        
    </div>
    <div id="Editores" style="margin-left: 1%; margin-right: 1%;">
        <div id="blocklyDiv" style="height: 480px; width: 45%; float: left; margin-right: 2.5%; color: black;"></div>
        <div id="codeeditor" style="width: 45%; float: left; margin-left: 2.5%; height: 100%;"></div>
        <script> 
            var sc = document.getElementById("modecode");
            var editor = CodeMirror(document.getElementById("codeeditor"), {
                mode: "basic3d_elements",
                theme: "ambiance",
                lineNumbers: true,
                extraKeys: { "Ctrl-Space": "autocomplete" }
            });
        </script>


        <script src="Librerias/BlocklyInt/workspace.js"></script>
        <script src="Librerias/BlocklyInt/bloques_intermedio.js"></script>
        <script src="Librerias/BlocklyInt/stubs_intermedio.js"></script>
        <script>
            function onFirstComment(event) {
                if (event.type == Blockly.Events.CHANGE || event.type == Blockly.Events.DELETE || event.type == Blockly.Events.CREATE || event.type == Blockly.Events.MOVE) {

                    //alert('Congratulations on creating your first comment!');
                    console.log("Ejecuto XD");
                }

            }
            workspace.addChangeListener(onFirstComment);
        </script>
        <script>


            function Analizar() {
                var millisecondsToWait = 5000;
                /*setTimeout(function () {
                    // Whatever you want to do after the wait
                    editor.setValue(Blockly.JavaScript.workspaceToCode(workspace));
                }, millisecondsToWait);*/
                editor.setValue(Blockly.JavaScript.workspaceToCode(workspace));

                return false;
            }
        </script>
    </div>


</asp:Content>
