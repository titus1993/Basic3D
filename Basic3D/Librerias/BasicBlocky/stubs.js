Blockly.JavaScript['while'] = function(block) {
  var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['do_while'] = function(block) {
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
  var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['if'] = function(block) {
  var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_cuerpo_then = Blockly.JavaScript.statementToCode(block, 'cuerpo_then');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['if_else'] = function(block) {
  var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_cuerpo_then = Blockly.JavaScript.statementToCode(block, 'cuerpo_then');
  var statements_cuerpo_else = Blockly.JavaScript.statementToCode(block, 'cuerpo_else');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['switch'] = function(block) {
  var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_modo = block.getFieldValue('modo');
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['aritmetico'] = function(block) {
  var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_der = Blockly.JavaScript.valueToCode(block, 'der', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['logico'] = function(block) {
  var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_der = Blockly.JavaScript.valueToCode(block, 'der', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['unario'] = function(block) {
  var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['relacional'] = function(block) {
  var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_der = Blockly.JavaScript.valueToCode(block, 'der', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['not'] = function(block) {
  var value_der = Blockly.JavaScript.valueToCode(block, 'der', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getnum'] = function(block) {
  var text_cadena = block.getFieldValue('cadena');
  var dropdown_valor = block.getFieldValue('valor');
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getbool'] = function(block) {
  var text_cadena = block.getFieldValue('cadena');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['innum'] = function(block) {
  var text_cadena = block.getFieldValue('cadena');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getrandom'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getlength'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['break'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['continue'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['outstr'] = function(block) {
  var text_valor = block.getFieldValue('valor');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['outnum'] = function(block) {
  var number_valor = block.getFieldValue('valor');
  var dropdown_comoentero = block.getFieldValue('comoentero');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['instr'] = function(block) {
  var text_variable = block.getFieldValue('variable');
  var text_msg = block.getFieldValue('msg');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['show'] = function(block) {
  var text_valor = block.getFieldValue('valor');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};