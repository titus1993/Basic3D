<%@ Page Title="" Language="C#" MasterPageFile="~/MaestraBasico.master" AutoEventWireup="true" CodeBehind="Basico.aspx.cs" Inherits="Basic3D.Basico" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Edicion" runat="server">
    <xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">
  <category name="Variables" colour="#a55b6d">
    <block type="declararacion">
      <field name="tipo">num</field>
      <field name="variable">a</field>
    </block>
    <block type="asignacion">
      <field name="variable">a</field>
    </block>
    <block type="variable">
      <field name="variable">a</field>
    </block>
    <block type="declararacion_for">
      <field name="tipo">num</field>
      <field name="variable">a</field>
    </block>
    <block type="asignacion_for">
      <field name="variable">a</field>
    </block>
  </category>
  <category name="Sentencias" colour="#5b6da5">
    <block type="if"></block>
    <block type="if_else"></block>
    <block type="switch">
      <field name="modo">true</field>
    </block>
    <block type="case"></block>
    <block type="rangocase"></block>
    <block type="default"></block>
  </category>
  <category name="Branching" colour="#6da55b">
    <block type="break"></block>
    <block type="break_id">
      <field name="id">a</field>
    </block>
    <block type="continue"></block>
  </category>
  <category name="Ciclos" colour="#a5805b">
    <block type="while"></block>
    <block type="do_while"></block>
    <block type="do_whilex"></block>
    <block type="repeat_until"></block>
    <block type="for"></block>
    <block type="loop">
      <field name="id">a</field>
    </block>
    <block type="count"></block>
  </category>
  <category name="Expresiones" colour="#805ba5">
    <block type="logico">
      <field name="op">mas</field>
    </block>
    <block type="relacional">
      <field name="op">igual</field>
    </block>
    <block type="aritmetico">
      <field name="op">mas</field>
    </block>
    <block type="not"></block>
    <block type="unario"></block>
    <block type="booleano">
      <field name="valor">true</field>
    </block>
    <block type="cadena">
      <field name="valor">cadena</field>
    </block>
    <block type="numero">
      <field name="valor">0</field>
    </block>
    <block type="null"></block>
  </category>
  <category name="Primitivas" colour="#5ba593">
    <block type="outstr">
      <field name="valor">salida</field>
    </block>
    <block type="outnum">
      <field name="valor">0</field>
      <field name="comoentero">true</field>
    </block>
    <block type="instr">
      <field name="variable">a</field>
      <field name="msg">mensaje</field>
    </block>
    <block type="show">
      <field name="valor">mensaje</field>
    </block>
    <block type="getnum">
      <field name="cadena">0</field>
      <field name="valor">bin</field>
      <field name="defecto">0</field>
    </block>
    <block type="getbool">
      <field name="cadena">true</field>
    </block>
    <block type="innum">
      <field name="cadena">true</field>
    </block>
    <block type="getrandom"></block>
    <block type="getlength">
      <field name="variable">a</field>
    </block>
  </category>
  <category name="Excepciones" colour="#93a55b">
    <block type="exepcion">
      <field name="valor">null</field>
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


        <script src="Librerias/BasicBlocky/blocky.js"></script>
        <script src="Librerias/BasicBlocky/bloques.js"></script>
        <script src="Librerias/BasicBlocky/stubs.js"></script>
        <script>
            function onFirstComment(event) {
                if (event.type == Blockly.Events.CHANGE || event.type == Blockly.Events.DELETE || event.type == Blockly.Events.CREATE || event.type == Blockly.Events.MOVE){

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
