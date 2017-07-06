<%@ Page Title="" Language="C#" MasterPageFile="~/MaestraBasico.master" AutoEventWireup="true" CodeBehind="Basico.aspx.cs" Inherits="Basic3D.Basico" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Edicion" runat="server">

    <xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">
  <category name="Variables" colour="#a55b6d">
    <block type="declaracion">
      <field name="tipo">num</field>
      <field name="variable">a</field>
    </block>
    <block type="asignacion">
      <field name="variable">a</field>
    </block>
    <block type="variable">
      <field name="variable">a</field>
    </block>
    <block type="declaracion_for">
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
    <block type="outstr"></block>
    <block type="outnum">
      <field name="comoentero">true</field>
    </block>
    <block type="instr"></block>
    <block type="show"></block>
    <block type="getnum"></block>
    <block type="getbool"></block>
    <block type="innum"></block>
    <block type="getrandom"></block>
    <block type="getlength"></block>
  </category>
  <category name="Excepciones" colour="#93a55b">
    <block type="exepcion">
      <field name="valor">NullPointerException</field>
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

    <div id="Controles" style="margin-bottom: 1%;">
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
                styleActiveLine: true,
                autoCloseBrackets: true,
                tabSize: 5,
                lineNumbers: true,
                extraKeys: {
                    "F11": function (cm) {
                        cm.setOption("fullScreen", !cm.getOption("fullScreen"));
                    },
                    "Esc": function (cm) {
                        if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
                    },
                    "Ctrl-Space": "autocomplete"
                }
            });
        </script>


        <script src="Librerias/BasicBlocky/blocky.js"></script>
        <script src="Librerias/BasicBlocky/bloques.js"></script>
        <script src="Librerias/BasicBlocky/stubs.js"></script>
        <script src="Logica/Analisis/archivo1.js"></script>
        <script src="Logica/Analisis/archivo2.js"></script>
        <script src="Logica/Gramatica/Basic3DElements.js"></script>
        <script src="Logica/Gramatica/Basic3D.js"></script>
        <script src="Logica/Gramatica/Codigo3D.js"></script>
        <script src="Logica/Ejecucion/Ejecutar3D.js"></script>
        <script src="Logica/Ejecucion/Funciones.js"></script>
        <script src="Logica/Ejecucion/Herramientas.js"></script>
        <script src="Logica/Ejecucion/Simbolo.js"></script>
        <script src="Logica/Ejecucion/Generar3D.js"></script>
        <script src="Logica/Ejecucion/EjecutarDebug.js"></script>
        <script>
            function onFirstComment(event) {
                if (event.type == Blockly.Events.CHANGE || event.type == Blockly.Events.DELETE || event.type == Blockly.Events.CREATE || event.type == Blockly.Events.MOVE) {

                    try {
                        InicializarHerramientas();
                        this.raiz = Basic3D.parse("Principal(){" + Blockly.JavaScript.workspaceToCode(workspace)+"}");
                        if (this.raiz) {


                            setPosGlobal(TablaSimbolos);
                            generarReporteSimbolos();
                            var cod = GeneracionC3D();
                            if (ContarErrores()) {
                                //editorelementos.setValue(N3D.Codigo);
                                editor.setValue(cod.Codigo);
                                //alert("Codigo 3D generado exitosamente.");
                            } else {
                                //alert("Se encontraron Errores");
                            }

                        } else {
                            //alert("Se encontraron errores");
                        }
                    } catch (error) {
                        //alert(error.message);
                        //alert("se encontraron errores");
                    }
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


<asp:Content ID="Debuguer" ContentPlaceHolderID="Debug" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <center>
        <div style="width:30%; margin-left:1%; margin-right:1%; margin-bottom:20px;" >
            
            <a href="#" class="myButton" onclick="return Analizar3D()"><span class="fa fa-play-circle"></span></a>   
            <a href="#" class="myButton" onclick="return LlamarEjecutarDebug()"><span class="fa fa-play"></span></a>   
            <a href="#" class="myButton" onclick="return setAvanzar()"><span class="fa fa-forward" ></span></a>
            <a href="#" class="myButton"><span class="fa fa-stop"></span></a>       
            <input id="slider" type="range"  min="100" max="2000" onchange="return setTiempo()"/>
        </div>
    </center>
        </ContentTemplate>
    </asp:UpdatePanel>

    <div style="margin-left: 1%; margin-right: 1%;">
        <div style="width: 25%; float: left; margin-right: 1px; height: 100%; margin-left: 3.5%;">
            <div id="TBDebug" style="width: 100%; float: left; margin-right: 1px; height: 60%; margin-left: 3.5%;"></div>
            <h5 style="float: left; margin-right: 1px; margin-left: 3.5%;">Consola</h5>
            <textarea id="TBConsola" style="white-space: nowrap; width: 100%; float: left; margin-right: 1px; height: 250px; margin-left: 3.5%; margin-top: 5px;"></textarea>
        </div>
        <script> 

            var TBDebug = CodeMirror(document.getElementById("TBDebug"), {
                mode: "basic3d_elements",
                theme: "ambiance",
                styleActiveLine: true,
                autoCloseBrackets: true,
                lineNumbers: true,
                tabSize: 5,
                extraKeys: {
                    "F11": function (cm) {
                        cm.setOption("fullScreen", !cm.getOption("fullScreen"));
                    },
                    "Esc": function (cm) {
                        if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
                    },
                    "Ctrl-Space": "autocomplete"
                }
            });
            TBDebug.setValue("\n\n\n\n\n\n\n\n\n\n");
            var Inter = null;
            function LlamarEjecutarDebug() {
                Inter = setInterval(function () {
                    // Whatever you want to do after the wait

                    if (Debug) {

                        EjecutarDebug.Next();
                    } else {
                        try {
                            this.raizd = Codigo3D.parse(TBDebug.getValue());
                            if (this.raizd) {
                                try {
                                    EjecutarDebug = new Ejecutar3Debugg();
                                } catch (error) {
                                    alert(error.message);
                                }
                            }
                        } catch (error) {
                            alert("se encontraron erores");
                        }
                    }

                }, Tiempo);


                return false;
            }

            function setTiempo() {
                Tiempo = document.getElementById("slider").value;
                //Avanzar = false;
                return false;
            }

            function Analizar3D() {
                try {
                    this.raiz = Codigo3D.parse(TBDebug.getValue());
                    if (this.raiz) {
                        setTimeout(function () {
                            // Whatever you want to do after the wait

                            Ejecutar3D();

                        }, Tiempo);
                        alert("paso XD");
                    } else {
                        alert("Se encontraron errores");
                    }
                } catch (error) {
                    alert(error.message);
                }
                return false;

            }
        </script>
        <div id="Tablas" style="width: 65%; float: left; margin-left: 3%; height: 100%;">
            <div style="width: 25%; float: left; margin-left: 3%; height: 100%;">
                <div class="table-title">
                    <h3 id="TituloStack">Stack = 0</h3>
                </div>
                <table id="TStack" class="table-fill">
                    <thead>
                        <tr>
                            <th class="text-left">Posicion</th>
                            <th class="text-left">Valor</th>
                        </tr>
                    </thead>
                    <tbody class="table-hover">
                    </tbody>
                </table>
            </div>
            <div style="width: 25%; float: left; margin-left: 3%; height: 100%;">
                <div class="table-title">
                    <h3 id="TituloHeap">Heap = 0</h3>
                </div>
                <table id="THeap" class="table-fill">
                    <thead>
                        <tr>
                            <th class="text-left">Posicion</th>
                            <th class="text-left">Valor</th>
                        </tr>
                    </thead>
                    <tbody class="table-hover">
                    </tbody>
                </table>
            </div>
            <div style="width: 25%; float: left; margin-left: 3%; height: 100%;">
                <div class="table-title">
                    <h3 id="TituloPool">String Pool = 0</h3>
                </div>
                <table id="TPool" class="table-fill">
                    <thead>
                        <tr>
                            <th class="text-left">Posicion</th>
                            <th class="text-left">Valor</th>
                        </tr>
                    </thead>
                    <tbody class="table-hover">
                    </tbody>
                </table>
            </div>

        </div>

    </div>
</asp:Content>

<asp:Content ID="Errores" ContentPlaceHolderID="Errores" runat="server">
    <table id="tablaerrores" class="table-fill">
        <thead>
            <tr>
                <th class="text-left">No</th>
                <th class="text-left">Tipo</th>
                <th class="text-left">Descripcion</th>
                <th class="text-left">Fila</th>
                <th class="text-left">Columna</th>
            </tr>
        </thead>
        <tbody class="table-hover">
        </tbody>
    </table>
</asp:Content>

<asp:Content ID="Reportes" ContentPlaceHolderID="Reportes" runat="server">
    <table id="tablasimbolo" class="table-fill">
        <thead>
            <tr>
                <th class="text-left">No</th>
                <th class="text-left">Rol</th>
                <th class="text-left">Tipo</th>
                <th class="text-left">Ambito</th>
                <th class="text-left">Nombre</th>
                <th class="text-left">Tamaño</th>
                <th class="text-left">Posicion</th>
            </tr>
        </thead>
        <tbody class="table-hover">
        </tbody>
    </table>
</asp:Content>
