Blockly.JavaScript['while'] = function (block) {
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.
    var code = "while(" + value_condicion.replace("(", "").replace(")", "") + "){\n" + statements_cuerpo + "\n }\n";
    return code;
};

Blockly.JavaScript['do_while'] = function (block) {
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "do{\n" + statements_cuerpo + "\n}while(" + value_condicion.replace("(", "").replace(")", "") + ")\n";
    return code;
};

Blockly.JavaScript['if'] = function (block) {
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_cuerpo_then = Blockly.JavaScript.statementToCode(block, 'cuerpo_then');
    // TODO: Assemble JavaScript into code variable.

    var code = "if(" + value_condicion.replace("(", "").replace(")", "") + ") then {\n" + statements_cuerpo_then + "\n}\n";
    return code;
};

Blockly.JavaScript['if_else'] = function (block) {
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_cuerpo_then = Blockly.JavaScript.statementToCode(block, 'cuerpo_then');
    var statements_cuerpo_else = Blockly.JavaScript.statementToCode(block, 'cuerpo_else');
    // TODO: Assemble JavaScript into code variable.
    var code = "if(" + value_condicion.replace("(", "").replace(")", "") + ") then {\n" +
        statements_cuerpo_then + "\n}else{\n" + statements_cuerpo_else + "\n}\n";
    return code;
};

Blockly.JavaScript['switch'] = function (block) {
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_modo = block.getFieldValue('modo');
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.
    var modo = "";
    if (dropdown_modo == "true") {
        modo = "true";
    } else {
        modo = "false";
    }
    var code = "switch(" + value_condicion.replace("(", "").replace(")", "") + "," + modo + "){\n" + statements_cuerpo
        + "\n}\n";
    return code;
};

Blockly.JavaScript['aritmetico'] = function (block) {
    var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_op = block.getFieldValue('op');
    var value_der = Blockly.JavaScript.valueToCode(block, 'der', Blockly.JavaScript.ORDER_ATOMIC);
    var op = "";
    if (dropdown_op == "mas") {
        op = "+";
    } else if (dropdown_op == "menos") {
        op = "-";
    } else if (dropdown_op == "por") {
        op = "*";
    } else if (dropdown_op == "division") {
        op = "/";
    } else if (dropdown_op == "potencia") {
        op = "^";
    } else if (dropdown_op == "modulo") {
        op = "%";
    }
    var code = value_izq.replace("(", "").replace(")", "") + op + value_der.replace("(", "").replace(")", "");
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['logico'] = function (block) {
    var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_op = block.getFieldValue('op');
    var value_der = Blockly.JavaScript.valueToCode(block, 'der', Blockly.JavaScript.ORDER_ATOMIC);

    var op = "";
    if (dropdown_op == "mas") {
        op = "||";
    } else if (dropdown_op == "menos") {
        op = "|?";
    } else if (dropdown_op == "por") {
        op = "&&";
    } else if (dropdown_op == "division") {
        op = "&?";
    } else if (dropdown_op == "potencia") {
        op = "|&";
    }
    var code = value_izq.replace("(", "").replace(")", "") + op + value_der.replace("(", "").replace(")", "");
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['unario'] = function (block) {
    var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "-" + value_izq;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['relacional'] = function (block) {
    var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_op = block.getFieldValue('op');
    var value_der = Blockly.JavaScript.valueToCode(block, 'der', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var op = "";
    if (dropdown_op == "igual") {
        op = "==";
    } else if (dropdown_op == "diferente") {
        op = "!=";
    } else if (dropdown_op == "mayor") {
        op = ">";
    } else if (dropdown_op == "mayorigual") {
        op = ">=";
    } else if (dropdown_op == "menor") {
        op = "<";
    } else if (dropdown_op == "menorigual") {
        op = "<=";
    }
    var code = value_izq.replace("(", "").replace(")", "") + op + value_der.replace("(", "").replace(")", "");
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['not'] = function (block) {
    var value_der = Blockly.JavaScript.valueToCode(block, 'der', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "!" + value_der;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['variable'] = function (block) {
    var text_variable = block.getFieldValue('variable');
    // TODO: Assemble JavaScript into code variable.
    var code = text_variable;
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
    var code = "";
    if (dropdown_valor == "true") {
        code = "true";
    } else {
        code = "false";
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cadena'] = function (block) {
    var text_valor = block.getFieldValue('valor');
    // TODO: Assemble JavaScript into code variable.
    var code = "\"" + text_valor + "\"";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['exepcion'] = function (block) {
    var dropdown_valor = block.getFieldValue('valor');
    // TODO: Assemble JavaScript into code variable.
    var nombre = "";
    if (dropdown_valor == "null") {
        nombre = "NullPointerException";
    } else if (dropdown_valor == "missing") {
        nombre = "MissingReturnStatement";
    } else if (dropdown_valor == "arithmetic") {
        nombre = "ArithmeticException";
    } else if (dropdown_valor == "stack") {
        nombre = "StackOverFlowException";
    } else if (dropdown_valor == "heap") {
        nombre = "HeapOverFlowException";
    } else if (dropdown_valor == "pool") {
        nombre = "PoolOverFlowException";
    }
    var code = "throws(" + nombre + ");\n";
    return code;
};

Blockly.JavaScript['repeat_until'] = function (block) {
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "repeat{\n" + statements_cuerpo.replace("(", "").replace(")", "") +
        "} until(" + value_condicion.replace("(", "").replace(")", "") + ")\n";
    return code;
};

Blockly.JavaScript['getnum'] = function (block) {
    var value_cadena = Blockly.JavaScript.valueToCode(block, 'cadena', Blockly.JavaScript.ORDER_ATOMIC);
    var value_base = Blockly.JavaScript.valueToCode(block, 'base', Blockly.JavaScript.ORDER_ATOMIC);
    var value_defecto = Blockly.JavaScript.valueToCode(block, 'defecto', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "getNum(" + value_cadena.replace("(", "").replace(")", "").replace(";", "") + "," + value_base.replace("(", "").replace(")", "").replace(";", "") + "," + value_defecto.replace("(", "").replace(")", "").replace(";", "") + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getbool'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "getBool(" + value_name.replace("(", "").replace(")", "").replace(";", "") + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['innum'] = function (block) {
    var value_num1 = Blockly.JavaScript.valueToCode(block, 'num1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_num2 = Blockly.JavaScript.valueToCode(block, 'num2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "inNum(" + value_num1.replace("(", "").replace(")", "").replace(";", "") + ", " + value_num2.replace("(", "").replace(")", "").replace(";", "") + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getrandom'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "getRandom()";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getlength'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "getLength(" + value_name.replace("(", "").replace(")", "").replace(";", "") + ")";
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
    var code = "NULL";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['outstr'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'outStr(' + value_name.replace("(", "").replace(")", "").replace(";", "") + ');\n';
    return code;
};

Blockly.JavaScript['outnum'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_comoentero = block.getFieldValue('comoentero');
    // TODO: Assemble JavaScript into code variable.
    var code = 'outNum(' + value_name.replace("(", "").replace(")", "").replace(";", "") + ',' + dropdown_comoentero.replace("(", "").replace(")", "").replace(";", "") + ');\n';
    return code;
};

Blockly.JavaScript['instr'] = function (block) {
    var value_variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'inStr(' + value_variable.replace("(", "").replace(")", "").replace(";", "") + ',' + value_msg.replace("(", "").replace(")", "").replace(";", "") + ');\n';
    return code;
};

Blockly.JavaScript['show'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'show(' + value_name.replace("(", "").replace(")", "").replace(";", "") + ');\n';
    return code;
};

Blockly.JavaScript['case'] = function (block) {
    var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.

    var code = "case " + value_valor.replace("(", "").replace(")", "") + ":\n\t" + statements_cuerpo.replace("(", "").replace(")", "");
    return code;
};

Blockly.JavaScript['default'] = function (block) {
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.
    var code = "default:\n\t" + statements_cuerpo.replace("(", "").replace(")", "");
    return code;
};

Blockly.JavaScript['rangocase'] = function (block) {
    var value_izq = Blockly.JavaScript.valueToCode(block, 'izq', Blockly.JavaScript.ORDER_ATOMIC);
    var value_der = Blockly.JavaScript.valueToCode(block, 'der', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.
    var code = "case " + value_izq.replace("(", "").replace(")", "") + "-" + value_der.replace("(", "").replace(")", "") + ":\n\t"
        + statements_cuerpo.replace("(", "").replace(")", "");
    return code;
};

Blockly.JavaScript['for'] = function (block) {
    var value_anterior_for = Blockly.JavaScript.valueToCode(block, 'anterior_for', Blockly.JavaScript.ORDER_ATOMIC);
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    var value_siguiente_for = Blockly.JavaScript.valueToCode(block, 'siguiente_for', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.
    var code = "for(" + value_anterior_for.toString().replace("(", "").replace(")", "") + ";" +
        value_condicion.replace("(", "").replace(")", "") + ";" + value_siguiente_for.replace("(", "").replace(")", "") + "){ \n" + statements_cuerpo + "}";
    return code;
};

Blockly.JavaScript['loop'] = function (block) {
    var text_id = block.getFieldValue('id');
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.
    var code = "loop " + text_id.replace("(", "").replace(")", "") + "{\n" + statements_cuerpo + "\n}";
    return code;
};

Blockly.JavaScript['break_id'] = function (block) {
    var text_id = block.getFieldValue('id');
    // TODO: Assemble JavaScript into code variable.
    var code = "break " + text_id + ";\n";
    return code;
};

Blockly.JavaScript['count'] = function (block) {
    var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    // TODO: Assemble JavaScript into code variable.

    var code = "count(" + value_condicion.replace("(", "").replace(")", "") + "){\n" + statements_cuerpo + "}\n";
    return code;
};

Blockly.JavaScript['do_whilex'] = function (block) {
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
    var value_condicion1 = Blockly.JavaScript.valueToCode(block, 'condicion1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_condicion2 = Blockly.JavaScript.valueToCode(block, 'condicion2', Blockly.JavaScript.ORDER_ATOMIC);

    var code = "do{\n" + statements_cuerpo +
        "}whilex(" + value_condicion1.replace("(", "").replace(")", "") + "," + value_condicion2.replace("(", "").replace(")", "") + ")\n";
    return code;
};

Blockly.JavaScript['declaracion'] = function (block) {
    var dropdown_tipo = block.getFieldValue('tipo');
    var text_variable = block.getFieldValue('variable');
    var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
    var tipo = "";
    if (dropdown_tipo == "str") {
        tipo = "str";
    } else if (dropdown_tipo == "num") {
        tipo = "num";
    } else if (dropdown_tipo == "bool") {
        tipo = "bool";
    }
    if (value_valor == "") {
        var code = tipo + " " + text_variable + ";\n";
        return code;
    } else {
        var code = tipo + " " + text_variable + ":" + value_valor.replace("(", "").replace(")", "") + ";\n";
        return code;
    }
};

Blockly.JavaScript['asignacion'] = function (block) {
    var text_variable = block.getFieldValue('variable');
    var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = text_variable + "=" + value_valor.replace("(", "").replace(")", "") + ";\n";
    return code;
};

Blockly.JavaScript['declaracion_for'] = function (block) {
    var dropdown_tipo = block.getFieldValue('tipo');
    var text_variable = block.getFieldValue('variable');
    var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "";
    var tipo = "";
    if (dropdown_tipo == "str") {
        tipo = "str";
    } else if (dropdown_tipo == "num") {
        tipo = "num";
    } else if (dropdown_tipo == "bool") {
        tipo = "bool";
    }
    if (value_valor == "") {
        code = tipo + " " + text_variable;
    } else {
        code = tipo + " " + text_variable + ":" + value_valor.replace("(", "").replace(")", "");
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['asignacion_for'] = function (block) {
    var text_variable = block.getFieldValue('variable');
    var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = text_variable.replace("(", "").replace(")", "") + "=" + value_valor.replace("(", "").replace(")", "");
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};