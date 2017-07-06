Blockly.Blocks['principal'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Principal");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['metodo'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Tipo")
            .appendField(new Blockly.FieldTextInput("void"), "tipo");
        this.appendDummyInput()
            .appendField("Nombre")
            .appendField(new Blockly.FieldTextInput("metodo1"), "nombre");
        this.appendDummyInput()
            .appendField("Parametros (")
            .appendField(new Blockly.FieldTextInput(""), "parametros")
            .appendField(")");
        this.setInputsInline(true);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['element'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("element")
            .appendField(new Blockly.FieldTextInput("nodo"), "nombre");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};