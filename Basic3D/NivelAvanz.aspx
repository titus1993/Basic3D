<%@ Page Title="" Language="C#" MasterPageFile="~/Maestra.Master" AutoEventWireup="true" CodeBehind="NivelAvanz.aspx.cs" Inherits="Basic3D.NivelAvanzado" %>

<asp:Content ID="Content0" ContentPlaceHolderID="Head" runat="server">
    <script src="Librerias/Blocky/blockly_compressed.js"></script>
    <script src="Librerias/Blocky/blocks_compressed.js"></script>
    <script src="Librerias/Blocky/msg/js/es.js"></script>

</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="Menu" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Menu1" runat="server">
    <asp:Panel ID="Panel1" runat="server">

        <div id="blocklyDiv" style="height: 480px; width: 600px;"></div>
        <script>
            var workspace = Blockly.inject('blocklyDiv',
                { toolbox: document.getElementById('toolbox') });
        </script>

    </asp:Panel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Menu2" runat="server">
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="Menu3" runat="server">
</asp:Content>
<asp:Content ID="Menu4" ContentPlaceHolderID="Menu4" runat="server">

</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="Menu5" runat="server">
</asp:Content>
