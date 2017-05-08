Blockly.Blocks['while'] = {
  init: function() {
    this.appendValueInput("condicion")
        .setCheck(["relacional", "logico"])
        .appendField("while");
    this.appendStatementInput("cuerpo")
        .setCheck(["if", "if_else", "switch", "repeat_until", "loop", "count", "do_whilex"]);
    this.setInputsInline(false);
    this.setPreviousStatement(true, ["if", "if_else", "switch", "repeat_until", "loop", "count", "do_whilex"]);
    this.setNextStatement(true, ["if", "if_else", "switch", "repeat_until", "loop", "count", "do_whilex"]);
    this.setColour(120);
    this.setTooltip('Mientras la condicion sea verdadera se ejecutaran las instrucciones');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['do_while'] = {
  init: function() {
    this.appendStatementInput("cuerpo")
        .setCheck(null)
        .appendField("do");
    this.appendValueInput("condicion")
        .setCheck(["relacional", "logico"])
        .appendField("while");
    this.setInputsInline(false);
    this.setPreviousStatement(true, ["if", "if_else", "switch", "repeat_until", "loop", "count", "do_whilex"]);
    this.setNextStatement(true, ["if", "if_else", "switch", "repeat_until", "loop", "count", "do_whilex"]);
    this.setColour(120);
    this.setTooltip('Las instrucciones se ejecutaran aunque sea una vez, luego mientras la condicion sea verdadera se seguiran ejecutando');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['if'] = {
  init: function() {
    this.appendValueInput("condicion")
        .setCheck(["relacional", "logico"])
        .appendField("if");
    this.appendStatementInput("cuerpo_then")
        .setCheck(null)
        .appendField("then");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["if", "if_else", "switch", "repeat_until", "loop", "count", "do_whilex"]);
    this.setNextStatement(true, ["if", "if_else", "switch", "repeat_until", "loop", "count", "do_whilex"]);
    this.setColour(210);
    this.setTooltip('Si la condicion se cumple se ejecutaran las instrucciones');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['if_else'] = {
  init: function() {
    this.appendValueInput("condicion")
        .setCheck(["relacional", "logico"])
        .appendField("if");
    this.appendStatementInput("cuerpo_then")
        .setCheck(null)
        .appendField("then");
    this.appendStatementInput("cuerpo_else")
        .setCheck(null)
        .appendField("else");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["if", "if_else", "switch", "repeat_until", "loop", "count", "do_whilex"]);
    this.setNextStatement(true, ["if", "if_else", "switch", "repeat_until", "loop", "count", "do_whilex"]);
    this.setColour(210);
    this.setTooltip('Si la condicion se cumple se ejecutaran las instrucciones en el then, sino se ejecutaran las instrucciones del else');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['switch'] = {
  init: function() {
    this.appendValueInput("condicion")
        .setCheck(null)
        .appendField("switch");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["true","true"], ["false","false"]]), "modo");
    this.appendStatementInput("cuerpo")
        .setCheck(["case", "default"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["if", "if_else", "switch", "repeat_until", "loop", "count", "do_whilex"]);
    this.setNextStatement(true, ["if", "if_else", "switch", "repeat_until", "loop", "count", "do_whilex"]);
    this.setColour(210);
    this.setTooltip('Compara la condicion con cada uno de los casos y dependiendo del modo los ejecutara');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['aritmetico'] = {
  init: function() {
    this.appendValueInput("izq")
        .setCheck(["aritmetico", "unario", "variable"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","mas"], ["-","menos"], ["*","por"], ["/","division"], ["^","potencia"], ["%","modulo"]]), "op");
    this.appendValueInput("der")
        .setCheck(["aritmetico", "unario", "variable"]);
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['logico'] = {
  init: function() {
    this.appendValueInput("izq")
        .setCheck(["logico", "relacional", "variable", "not"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["||","mas"], ["|?","menos"], ["&&","por"], ["&?","division"], ["|&","potencia"]]), "op");
    this.appendValueInput("der")
        .setCheck(["logico", "relacional", "variable", "not"]);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['unario'] = {
  init: function() {
    this.appendValueInput("izq")
        .setCheck(["aritmetico", "unario", "variable"])
        .appendField("-");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['relacional'] = {
  init: function() {
    this.appendValueInput("izq")
        .setCheck(["variable", "aritmetico", "numero", "cadena", "booleano"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["==","igual"], ["!=","diferente"], [">","mayor"], [">=","mayorigual"], ["<","menor"], ["<=","menorigual"]]), "op");
    this.appendValueInput("der")
        .setCheck(["variable", "aritmetico"]);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['not'] = {
  init: function() {
    this.appendValueInput("der")
        .setCheck(["logico", "relacional", "variable", "not"])
        .appendField("!");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['getnum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getNum (")
        .appendField(new Blockly.FieldTextInput("0"), "cadena")
        .appendField(",");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["bin","bin"], ["hex","hex"], ["dec","dec"]]), "valor")
        .appendField(",");
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Ingrese un valor numerico para ser convertido a la base de su eleccion');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['getbool'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getBool (")
        .appendField(new Blockly.FieldTextInput("true"), "cadena")
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Ingrese un valor numerico para ser convertido a la base de su eleccion');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['innum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("inNum (")
        .appendField(new Blockly.FieldTextInput("true"), "cadena")
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Ingrese un valor numerico para ser convertido a la base de su eleccion');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['getrandom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getRandom ()");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Ingrese un valor numerico para ser convertido a la base de su eleccion');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['getlength'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getLength (")
        .appendField(new Blockly.FieldVariable("item"), "NAME")
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Ingrese un valor numerico para ser convertido a la base de su eleccion');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("break");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Intruccion que finaliza un ciclo');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['continue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("continue");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Instruccion que interrumpe la iteracion actual');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['outstr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("outStr (")
        .appendField(new Blockly.FieldTextInput("salida"), "valor")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Imprime en consola el texto que recibe como entrada');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['outnum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("outNum (")
        .appendField(new Blockly.FieldNumber(0), "valor")
        .appendField(", ")
        .appendField(new Blockly.FieldDropdown([["true","true"], ["false","false"]]), "comoentero")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Esta función imprimirá en consola el texto que representa los dígitos que componen el número que recibe como primer parámetro y al recibir segundo parámetro determinará si se desea mostrar como un número con punto decimal, si el segundo parámetro es falso; caso contrario lo imprimirá como un número entero.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['instr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("inStr (")
        .appendField(new Blockly.FieldTextInput("a"), "variable")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput("mensaje"), "msg")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Esta función interrumpirá el flujo normal del programa para pedir una cadena al usuario, cuya longitud máxima será de 100 caracteres, a través de una ventana emergente (popup) mostrando como mensaje en dicha ventana el texto que recibe como segundo parámetro. El valor ingresado será almacenado en la variable identificada por el primer parámetro.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['show'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("show (")
        .appendField(new Blockly.FieldTextInput("mensaje"), "valor")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Esta función muestra al usuario una ventana emergente mostrando un mensaje con el texto que recibe como parámetro.');
    this.setHelpUrl('');
  }
};