<%@ Page Title="" Language="C#" MasterPageFile="~/MaestraAvanzado.master" AutoEventWireup="true" CodeBehind="Avanzado.aspx.cs" Inherits="Basic3D.Avanzado" %>




<asp:Content ID="Edicion" ContentPlaceHolderID="Edicion" runat="server">
    <style>
        .myButton {
            background-color: #b69e40;
            -moz-border-radius: 42px;
            -webkit-border-radius: 42px;
            border-radius: 42px;
            display: inline-block;
            cursor: pointer;
            color: #ffffff;
            font-family: Arial;
            font-size: 17px;
            padding: 7px 14px;
            text-decoration: none;
        }

            .myButton:hover {
                background-color: #d6b12b;
            }

            .myButton:active {
                position: relative;
                top: 1px;
            }
    </style>
    <style>
        @import url(http://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);


        div.table-title {
            display: block;
            margin: auto;
            max-width: 1000px;
            padding: 5px;
            width: 100%;
        }

        .table-title h3 {
            color: #fafafa;
            font-size: 30px;
            font-weight: 400;
            font-style: normal;
            font-family: "Roboto", helvetica, arial, sans-serif;
            text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
            text-transform: uppercase;
        }


        /*** Table Styles **/

        .table-fill {
            background: white;
            border-radius: 3px;
            border-collapse: collapse;
            height: 320px;
            margin: auto;
            max-width: 1000px;
            padding: 5px;
            width: 100%;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            animation: float 5s infinite;
        }

        th {
            color: #FFFFFF;
            background: #b69e40;
            border-bottom: 4px solid #9ea7af;
            border-right: 1px solid #C1C3D1;
            font-size: 23px;
            font-weight: 100;
            padding: 24px;
            text-align: left;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
            vertical-align: middle;
        }

            th:first-child {
                border-top-left-radius: 3px;
            }

            th:last-child {
                border-top-right-radius: 3px;
                border-right: none;
            }

        tr {
            border-top: 1px solid #C1C3D1;
            border-bottom: 1px solid #C1C3D1;
            color: #666B85;
            font-size: 16px;
            font-weight: normal;
            text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
        }

            tr:hover td {
                background: #B69E43;
                color: #FFFFFF;
                border-top: 1px solid #22262e;
                border-bottom: 1px solid #22262e;
            }

            tr:first-child {
                border-top: none;
            }

            tr:last-child {
                border-bottom: none;
            }

            tr:nth-child(odd) td {
                background: #EBEBEB;
            }

            tr:nth-child(odd):hover td {
                background: #B69E43;
            }

            tr:last-child td:first-child {
                border-bottom-left-radius: 3px;
            }

            tr:last-child td:last-child {
                border-bottom-right-radius: 3px;
            }

        td {
            background: #FFFFFF;
            padding: 20px;
            text-align: left;
            vertical-align: middle;
            font-weight: 300;
            font-size: 18px;
            text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
            border-right: 1px solid #C1C3D1;
        }

            td:last-child {
                border-right: 0px;
            }

        th.text-left {
            text-align: left;
        }

        th.text-center {
            text-align: center;
        }

        th.text-right {
            text-align: right;
        }

        td.text-left {
            text-align: left;
        }

        td.text-center {
            text-align: center;
        }

        td.text-right {
            text-align: right;
        }
    </style>

    <center>
        <div style="width:30%; margin-left:1%; margin-right:1%; margin-bottom:20px;" >
            <a href="#" class="myButton"><span class="fa fa-upload"></span></a>   
            <a href="#" class="myButton"><span class="fa fa-download"></span></a>   
            <a href="#" class="myButton" onclick="return Analizar()"><span class="fa fa-play" ></span></a>
            <a href="#" class="myButton"><span class="fa fa-bug"></span></a>           
        </div>
    </center>
    <div id="Editores" style="margin-left: 1%; margin-right: 1%;">
        <div id="codeeditor" style="width: 45%; float: left; margin-right: 1px; height: 100%; margin-left: 3.5%;"></div>
        <script> 
            var sc = document.getElementById("modecode");
            var editor = CodeMirror(document.getElementById("codeeditor"), {
                mode: "basic3d_elements",
                theme: "ambiance",
                lineNumbers: true,
                extraKeys: { "Ctrl-Space": "autocomplete" }
            });
        </script>
        <div id="elementos" style="width: 45%; float: left; margin-left: 3%; height: 100%;"></div>
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
    <script src="Logica/Ejecucion/Simbolo.js"></script>
    <script src="Logica/Ejecucion/Generar3D.js"></script>

    <script>
                ///<reference path="Logica/Gramatica/Basic3D.js" />
                function AnalizarElementos() {
                    try {
                        this.raiz = Basic3DElements.parse(editorelementos.getValue());

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

                function Analizar() {
                    try {
                        InicializarHerramientas();
                        this.raiz = Basic3D.parse(editor.getValue());
                        if (this.raiz) {
                            setPosGlobal(TablaSimbolos);
                            generarReporteSimbolos();
                            GeneracionC3D();

                        } else {
                            alert("Se encontraron errores");
                        }
                    } catch (error) {
                        alert(error.message);
                    }

                    /*if (a == undefined) {
                        alert("se econtraro errores");
                    } else {
    
                        editor.setValue(a+'\n');
                    }*/
                    return false;
                    //var elemento = document.getElementById("elementos");
                    //elemento.textContent = entrada.textContent;

                }
    </script>

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
