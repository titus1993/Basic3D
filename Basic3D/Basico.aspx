<%@ Page Title="" Language="C#" MasterPageFile="~/MaestraBasico.master" AutoEventWireup="true" CodeBehind="Basico.aspx.cs" Inherits="Basic3D.Basico" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Edicion" runat="server">
    <xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">
      <category name="Sentencias" colour="#a55b5b">
        <block type="if"></block>
        <block type="if_else"></block>
        <block type="switch">
          <field name="modo">true</field>
        </block>
      </category>
      <category name="Ciclos" colour="#80a55b">
        <block type="while"></block>
        <block type="do_while"></block>
      </category>
      <category name="Branching" colour="#5ba5a5">
        <block type="break"></block>
        <block type="continue"></block>
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
      </category>
      <category name="Primitivas" colour="#a56d5b">
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
          <field name="NAME">0</field>
        </block>
        <block type="getbool">
          <field name="cadena">true</field>
        </block>
        <block type="innum">
          <field name="cadena">true</field>
        </block>
        <block type="getrandom"></block>
        <block type="getlength">
          <field name="NAME">item</field>
        </block>
      </category>
      <category name="Variables" colour="#A65C81" custom="VARIABLE"></category>
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
    </div>


</asp:Content>
