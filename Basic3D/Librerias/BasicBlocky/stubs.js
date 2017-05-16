Blockly.JavaScript['while'] = function (block) {
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if (value_condicion != ""){
        code = 'while ' + value_condicion + '{\n' + statements_cuerpo + '\n}';
    } else {
        code = 'while (true){\n' + statements_cuerpo + '\n}';
    }
    return code;
};

Blockly.JavaScript['do_while'] = function (block) {
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['if'] = function (block) {
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_cuerpo_then = Blockly.JavaScript.statementToCode(block, 'cuerpo_then');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['if_else'] = function (block) {
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_cuerpo_then = Blockly.JavaScript.statementToCode(block, 'cuerpo_then');
    var statements_cuerpo_else = Blockly.JavaScript.statementToCode(block, 'cuerpo_else');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    

    return code;
};

Blockly.JavaScript['switch'] = function (block) {
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_modo = block.getFieldValue('modo');
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['aritmetico'] = function (block) {
    var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_op = block.getFieldValue('op');
    var value_der = Blockly.JavaScript.valueToCode(block, 'der', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_izq + ' ' + dropdown_op + ' ' + value_der;
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
};

Blockly.JavaScript['logico'] = function (block) {
    var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_op = block.getFieldValue('op');
    var value_der = Blockly.JavaScript.valueToCode(block, 'der', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['unario'] = function (block) {
    var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['relacional'] = function (block) {
    var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_op = block.getFieldValue('op');
    var value_der = Blockly.JavaScript.valueToCode(block, 'der', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['not'] = function (block) {
    var value_der = Blockly.JavaScript.valueToCode(block, 'der', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['variable'] = function (block) {
    var text_variable = block.getFieldValue('variable');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['numero'] = function (block) {
    var number_valor = block.getFieldValue('valor');
    // TODO: Assemble JavaScript into code variable.
    var code = number_valor;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['booleano'] = function (block) {
    var dropdown_valor = block.getFieldValue('valor');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_valor;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cadena'] = function (block) {
    var text_valor = block.getFieldValue('valor');
    // TODO: Assemble JavaScript into code variable.
    var code = '" "';
    if (text_valor != ""){
        code = '"' + text_valor + '"'
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['exepcion'] = function (block) {
    var dropdown_valor = block.getFieldValue('valor');
    // TODO: Assemble JavaScript into code variable.
    var code = 'throws(' + dropdown_valor + ');\n';
    return code;
};

Blockly.JavaScript['repeat_until'] = function (block) {
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['getnum'] = function (block) {
    var text_cadena = block.getFieldValue('cadena');
    var dropdown_valor = block.getFieldValue('valor');
    var number_defecto = block.getFieldValue('defecto');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getbool'] = function (block) {
    var text_cadena = block.getFieldValue('cadena');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['innum'] = function (block) {
    var text_cadena = block.getFieldValue('cadena');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getrandom'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getlength'] = function (block) {
    var text_variable = block.getFieldValue('variable');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['break'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'break;\n';
    return code;
};

Blockly.JavaScript['continue'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'continue;\n';
    return code;
};

Blockly.JavaScript['null'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'NULL';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['outstr'] = function (block) {
    var text_valor = block.getFieldValue('valor');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['outnum'] = function (block) {
    var number_valor = block.getFieldValue('valor');
    var dropdown_comoentero = block.getFieldValue('comoentero');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['instr'] = function (block) {
    var text_variable = block.getFieldValue('variable');
    var text_msg = block.getFieldValue('msg');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['show'] = function (block) {
    var text_valor = block.getFieldValue('valor');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['case'] = function (block) {
    var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['default'] = function (block) {
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['rangocase'] = function (block) {
    var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
    var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['for'] = function (block) {
    var value_anterior_for = Blockly.JavaScript.valueToCode(block, 'anterior_for', Blockly.JavaScript.ORDER_ATOMIC);
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    var value_siguiente_for = Blockly.JavaScript.valueToCode(block, 'siguiente_for', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['loop'] = function (block) {
    var text_id = block.getFieldValue('id');
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['break_id'] = function (block) {
    var text_id = block.getFieldValue('id');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['count'] = function (block) {
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['do_whilex'] = function (block) {
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    var value_condicion1 = Blockly.JavaScript.valueToCode(block, 'condicion1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_condicion2 = Blockly.JavaScript.valueToCode(block, 'condicion2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['declararacion'] = function (block) {
    var dropdown_tipo = block.getFieldValue('tipo');
    var text_variable = block.getFieldValue('variable');
    var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['asignacion'] = function (block) {
    var text_variable = block.getFieldValue('variable');
    var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['declararacion_for'] = function (block) {
    var dropdown_tipo = block.getFieldValue('tipo');
    var text_variable = block.getFieldValue('variable');
    var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['asignacion_for'] = function (block) {
    var text_variable = block.getFieldValue('variable');
    var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};