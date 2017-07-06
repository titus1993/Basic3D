Blockly.Blocks['while'] = {
    init: function () {
        this.appendValueInput("condicion")
            .setCheck(null)
            .appendField("while");
        this.appendStatementInput("cuerpo")
            .setCheck(null);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('Mientras la condicion sea verdadera se ejecutaran las instrucciones');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['do_while'] = {
    init: function () {
        this.appendStatementInput("cuerpo")
            .setCheck(null)
            .appendField("do");
        this.appendValueInput("condicion")
            .setCheck(null)
            .appendField("while");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('Las instrucciones se ejecutaran aunque sea una vez, luego mientras la condicion sea verdadera se seguiran ejecutando');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['if'] = {
    init: function () {
        this.appendValueInput("condicion")
            .setCheck(null)
            .appendField("if");
        this.appendStatementInput("cuerpo_then")
            .setCheck(null)
            .appendField("then");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip('Si la condicion se cumple se ejecutaran las instrucciones');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['if_else'] = {
    init: function () {
        this.appendValueInput("condicion")
            .setCheck(null)
            .appendField("if");
        this.appendStatementInput("cuerpo_then")
            .setCheck(null)
            .appendField("then");
        this.appendStatementInput("cuerpo_else")
            .setCheck(null)
            .appendField("else");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip('Si la condicion se cumple se ejecutaran las instrucciones en el then, sino se ejecutaran las instrucciones del else');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['switch'] = {
    init: function () {
        this.appendValueInput("condicion")
            .setCheck(null)
            .appendField("switch");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["true", "true"], ["false", "false"]]), "modo");
        this.appendStatementInput("cuerpo")
            .setCheck(["case", "default"]);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip('Compara la condicion con cada uno de los casos y dependiendo del modo los ejecutara');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['aritmetico'] = {
    init: function () {
        this.appendValueInput("izq")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["+", "mas"], ["-", "menos"], ["*", "por"], ["/", "division"], ["^", "potencia"], ["%", "modulo"]]), "op");
        this.appendValueInput("der")
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['logico'] = {
    init: function () {
        this.appendValueInput("izq")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["||", "mas"], ["|?", "menos"], ["&&", "por"], ["&?", "division"], ["|&", "potencia"]]), "op");
        this.appendValueInput("der")
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['unario'] = {
    init: function () {
        this.appendValueInput("izq")
            .setCheck(null)
            .appendField("-");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['relacional'] = {
    init: function () {
        this.appendValueInput("izq")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["==", "igual"], ["!=", "diferente"], [">", "mayor"], [">=", "mayorigual"], ["<", "menor"], ["<=", "menorigual"]]), "op");
        this.appendValueInput("der")
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['not'] = {
    init: function () {
        this.appendValueInput("der")
            .setCheck(null)
            .appendField("!");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['variable'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("a"), "variable");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip('Representa una variable.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['numero'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "valor");
        this.setOutput(true, null);
        this.setColour(290);
        this.setTooltip('Representa un numero');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['booleano'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["true", "true"], ["false", "false"]]), "valor");
        this.setOutput(true, null);
        this.setColour(290);
        this.setTooltip('Representa un valor boolean');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['cadena'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("\"")
            .appendField(new Blockly.FieldTextInput("cadena"), "valor")
            .appendField("\"");
        this.setOutput(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['exepcion'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["NullPointerException", "NullPointerException"], ["MissingReturnStatement", "MissingReturnStatement"], ["ArithmeticException", "ArithmeticException"], ["StackOverFlowException", "StackOverFlowException"], ["HeapOverFlowException", "HeapOverFlowException"], ["PoolOverFlowException", "PoolOverFlowException"]]), "valor");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['repeat_until'] = {
    init: function () {
        this.appendStatementInput("cuerpo")
            .setCheck(null)
            .appendField("repeat");
        this.appendValueInput("condicion")
            .setCheck(null)
            .appendField("until");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('Si la condicion es falsa se ejecutaran las instrucciones.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['getnum'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("getNum (");
        this.appendValueInput("cadena")
            .setCheck(null);
        this.appendValueInput("base")
            .setCheck(null)
            .appendField(",");
        this.appendDummyInput()
            .appendField(",");
        this.appendValueInput("defecto")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip('Ingrese un valor numerico para ser convertido a la base de su eleccion');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['getbool'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("getBool (");
        this.appendValueInput("NAME")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip('Ingrese un valor numerico para ser convertido a la base de su eleccion');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['innum'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("inNum (");
        this.appendValueInput("num1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(",");
        this.appendValueInput("num2")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip('Ingrese un valor numerico para ser convertido a la base de su eleccion');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['getrandom'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("getRandom ()");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip('Obtiene un numero aleatorio');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['getlength'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("getLength (");
        this.appendValueInput("NAME")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip('Obtiene la longitud de un texto.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['break'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("break");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('Intruccion que finaliza un ciclo');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['continue'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("continue");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('Instruccion que interrumpe la iteracion actual');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['null'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("NULL");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(290);
        this.setTooltip('Valor nulo');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['outstr'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("outStr (");
        this.appendValueInput("NAME")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip('Imprime en consola el texto que recibe como entrada');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['outnum'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("outNum (");
        this.appendValueInput("NAME")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(", ")
            .appendField(new Blockly.FieldDropdown([["true", "true"], ["false", "false"]]), "comoentero")
            .appendField(")");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip('Esta función imprimirá en consola el texto que representa los dígitos que componen el número que recibe como primer parámetro y al recibir segundo parámetro determinará si se desea mostrar como un número con punto decimal, si el segundo parámetro es falso; caso contrario lo imprimirá como un número entero.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['instr'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("inStr (");
        this.appendValueInput("variable")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(", ");
        this.appendValueInput("msg")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip('Esta función interrumpirá el flujo normal del programa para pedir una cadena al usuario, cuya longitud máxima será de 100 caracteres, a través de una ventana emergente (popup) mostrando como mensaje en dicha ventana el texto que recibe como segundo parámetro. El valor ingresado será almacenado en la variable identificada por el primer parámetro.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['show'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("show (");
        this.appendDummyInput()
            .appendField(")");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip('Esta función muestra al usuario una ventana emergente mostrando un mensaje con el texto que recibe como parámetro.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['case'] = {
    init: function () {
        this.appendValueInput("valor")
            .setCheck(["numero", "cadena"])
            .appendField("case");
        this.appendStatementInput("cuerpo")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["case", "rangocase", "default"]);
        this.setNextStatement(true, ["case", "rangocase", "default"]);
        this.setColour(210);
        this.setTooltip('Instruccion que funciona exclusivamente con un switch, dependiendo del modo del switch, si el valor es igual al valor del case o no, se ejecuta.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['default'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("default");
        this.appendStatementInput("cuerpo")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["case", "rangocase"]);
        this.setColour(210);
        this.setTooltip('Instruccion que es ejecutara por defecto en un switch.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['rangocase'] = {
    init: function () {
        this.appendValueInput("izq")
            .setCheck(["numero", "cadena"])
            .appendField("case");
        this.appendValueInput("izq")
            .setCheck(null)
            .appendField("-");
        this.appendStatementInput("cuerpo")
            .setCheck(["numero", "cadena"]);
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["switch", "case", "rangocase", "default"]);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip('Instruccion que funciona exclusivamente con un switch, dependiendo del modo del switch, si el valor esta en el rango o no del case, se ejecuta.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['for'] = {
    init: function () {
        this.appendValueInput("anterior_for")
            .setCheck(["declaracion_for", "asignacion_for"])
            .appendField("for");
        this.appendValueInput("condicion")
            .setCheck(["variable", "logico", "not", "relacional"])
            .appendField("condicion");
        this.appendValueInput("siguiente_for")
            .setCheck("asignacion_for")
            .appendField("asignacion");
        this.appendStatementInput("cuerpo")
            .setCheck("asignacion_for");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('Sentencia de ciclo, la cual permite inicializar o establecer una variable para control. Este ciclo contiene una condición que se verifica en cada una de las iteraciones que realice, y luego se debe definir una asignación simplificada que afecta directamente a la variable de control.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['loop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("loop")
            .appendField(new Blockly.FieldTextInput("a"), "id");
        this.appendStatementInput("cuerpo")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('Sentencia de ciclo que lleva asociado un identificador, este ciclo ejecuta sus instrucciones infinitamente hasta que encuentre una sentencia break que le indique cuándo finalizar.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['break_id'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("break")
            .appendField(new Blockly.FieldTextInput("a"), "id");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('Intruccion que finaliza un loop.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['count'] = {
    init: function () {
        this.appendValueInput("condicion")
            .setCheck(null)
            .appendField("count");
        this.appendStatementInput("cuerpo")
            .setCheck(null);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('Sentencia de ciclo que ejecuta instrucciones las veces que se le indiquen según un valor número.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['do_whilex'] = {
    init: function () {
        this.appendStatementInput("cuerpo")
            .setCheck(null)
            .appendField("do");
        this.appendValueInput("condicion1")
            .setCheck(null)
            .appendField("whilex");
        this.appendValueInput("condicion2")
            .setCheck(null)
            .appendField(", ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('Es un ciclo que se debe ejecutar al menos una vez si se cumple una de las dos condiciones, luego debe seguir ejecutando sí y solo sí las dos condiciones son verdaderas.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['asignacion'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Nombre")
            .appendField(new Blockly.FieldTextInput("a"), "variable");
        this.appendValueInput("valor")
            .setCheck(null)
            .appendField("Valor");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('Instruccion que le asigna un valor a una variable existente, si no se le asigna un valor se tomara por defecto.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['asignacion_for'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Nombre")
            .appendField(new Blockly.FieldTextInput("a"), "variable");
        this.appendValueInput("valor")
            .setCheck(null)
            .appendField("Valor");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip('Instruccion que le asigna un valor a una variable existente, si no se le asigna un valor se tomara por defecto.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['declaracion_for'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Tipo")
            .appendField(new Blockly.FieldDropdown([["num", "num"], ["str", "str"], ["bool", "bool"]]), "tipo");
        this.appendDummyInput()
            .appendField("Nombre")
            .appendField(new Blockly.FieldTextInput("a"), "variable");
        this.appendValueInput("valor")
            .setCheck(null)
            .appendField("Valor");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip('Intruccion que declara una variable, si no se le asigna un valor por defecto se considerara como nula.');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['declaracion'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Tipo")
            .appendField(new Blockly.FieldDropdown([["num", "num"], ["str", "str"], ["bool", "bool"]]), "tipo");
        this.appendDummyInput()
            .appendField("Nombre")
            .appendField(new Blockly.FieldTextInput("a"), "variable");
        this.appendValueInput("valor")
            .setCheck(null)
            .appendField("Valor");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('Intruccion que declara una variable, si no se le asigna un valor por defecto se considerara como nula.');
        this.setHelpUrl('');
    }
};