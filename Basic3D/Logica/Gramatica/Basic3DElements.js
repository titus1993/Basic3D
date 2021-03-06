/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var Basic3DElements = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[5,7],$V2=[1,20],$V3=[1,16],$V4=[1,17],$V5=[1,18],$V6=[1,19],$V7=[7,9,12,19,32,33,34],$V8=[9,15],$V9=[8,15,22],$Va=[1,42],$Vb=[1,36],$Vc=[1,35],$Vd=[1,33],$Ve=[1,34],$Vf=[1,38],$Vg=[1,39],$Vh=[1,40],$Vi=[1,41],$Vj=[1,47],$Vk=[1,48],$Vl=[1,49],$Vm=[1,50],$Vn=[1,51],$Vo=[1,52],$Vp=[1,53],$Vq=[1,54],$Vr=[1,55],$Vs=[1,56],$Vt=[1,57],$Vu=[1,58],$Vv=[1,59],$Vw=[1,60],$Vx=[1,61],$Vy=[1,62],$Vz=[1,63],$VA=[1,64],$VB=[15,31,35,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52],$VC=[1,71],$VD=[9,15,31,35,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52],$VE=[21,24],$VF=[15,31,35,36,37,38,39],$VG=[15,31,35,37],$VH=[15,31,35,36,37,38],$VI=[15,31,35,36,37,38,39,41,42,43,44,45,46],$VJ=[15,31,35,36,37,38,39,41,42,43,44,45,46,47,48],$VK=[15,31,35,36,37,38,39,41,42,43,44,45,46,47,48,49,50,52];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"INICIO":3,"L_ELEMENTOS":4,"EOF":5,"ELEMENTO":6,"TElement":7,":":8,"Id":9,"{":10,"L_CUERPO":11,"}":12,"CUERPO":13,"DECLARACION":14,";":15,"TIPO":16,"L_ID":17,"VALOR":18,"TArray":19,"L_DIMENSIONES":20,"TOf":21,",":22,"DIMENSION":23,"[":24,"Num":25,"]":26,".":27,"EXP":28,"TCreate":29,"(":30,")":31,"TNum":32,"TStr":33,"TBool":34,"||":35,"&&":36,"|?":37,"&?":38,"|&":39,"!":40,"==":41,"!=":42,">":43,">=":44,"<":45,"<=":46,"+":47,"-":48,"*":49,"/":50,"^":51,"%":52,"OBJETO":53,"Cadena":54,"Verdadero":55,"Falso":56,"TNull":57,"HIJO":58,"L_EXPS":59,"L_EXP":60,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"TElement",8:":",9:"Id",10:"{",12:"}",15:";",19:"TArray",21:"TOf",22:",",24:"[",25:"Num",26:"]",27:".",29:"TCreate",30:"(",31:")",32:"TNum",33:"TStr",34:"TBool",35:"||",36:"&&",37:"|?",38:"&?",39:"|&",40:"!",41:"==",42:"!=",43:">",44:">=",45:"<",46:"<=",47:"+",48:"-",49:"*",50:"/",51:"^",52:"%",54:"Cadena",55:"Verdadero",56:"Falso",57:"TNull"},
productions_: [0,[3,2],[3,1],[4,2],[4,1],[6,6],[11,2],[11,1],[13,2],[13,1],[14,4],[14,2],[14,6],[17,3],[17,1],[20,2],[20,1],[23,3],[23,6],[18,1],[18,4],[16,1],[16,1],[16,1],[16,1],[28,3],[28,3],[28,3],[28,3],[28,3],[28,2],[28,3],[28,3],[28,3],[28,3],[28,3],[28,3],[28,3],[28,3],[28,3],[28,3],[28,3],[28,3],[28,2],[28,3],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,2],[28,1],[53,2],[53,1],[58,2],[59,1],[59,0],[60,3],[60,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
					
			for(var i = 0; i < $$[$0-1].length; i++){
				TablaSimbolos.push($$[$0-1][i]);
			}
			this.$ = $$[$0-1];
		
break;
case 3:
					
			for(var i = 0; i < $$[$0].length; i++){
				$$[$0-1].push($$[$0][i]);
			}
			this.$ = $$[$0-1];
		
break;
case 4:

			this.$ = new Array();
			this.$.push($$[$0]); 
		
break;
case 5:

			var e = new Element($$[$0-3], $$[$0-1], null);
			var simbolo = new Simbolo ("element", $$[$0-3], "element", -1, 0, _$[$0-5].first_line, _$[$0-5].first_column + 1, $$[$0-1], e);
			e.Simbolo = simbolo;

			for(var i =0; i < $$[$0-1].length; i++){
				$$[$0-1][i].Padre = simbolo;
				if($$[$0-1][i].Rol == "declaracion"){
					simbolo.Size++;
				}else{
					if(simbolo.Rol != "element"){
						simbolo.Size = simbolo.Size + $$[$0-1][i].Size;	
					}											
				}
			}	
			for(var i =0; i < $$[$0-1].length; i++){
				$$[$0-1][i].setPos(position);
			}
			position = 0;
			this.$ = simbolo;			
		
break;
case 6:
					
				for(var i = 0; i < $$[$0].length; i++){
					$$[$0-1].push($$[$0][i]);
				}
				this.$ = $$[$0-1];
			
break;
case 7: case 54: case 56:

				this.$ = $$[$0];
			
break;
case 8:
 
				this.$ = $$[$0-1]; 
			
break;
case 9:
 
				this.$ = new Array();
				this.$.push($$[$0]); 
			
break;
case 10:

					this.$ = new Array();
					for(var i = 0; i < $$[$0-2].length; i++){
						var de = new Declaracion($$[$0-3], $$[$0-2][i], $$[$0], null);
						var simbolo = new Simbolo ($$[$0-3], $$[$0-2][i], "declaracion", 0, 1, _$[$0-3].first_line, _$[$0-3].first_column + 1, new Array(), de);
						de.Simbolo = simbolo;
						this.$.push(simbolo);
					}				
				
break;
case 11:

					this.$ = new Array();
					for(var i = 0; i < $$[$0].length; i++){
						var de = new Declaracion($$[$0-1], $$[$0][i], null, null);
						var simbolo = new Simbolo ($$[$0-1], $$[$0][i], "declaracion", 0, 1, _$[$0-1].first_line, _$[$0-1].first_column + 1, new Array(), de);
						de.Simbolo = simbolo;
						this.$.push(simbolo);
					}				
				
break;
case 13:

			$$[$0-2].push($$[$0]);
			this.$ = $$[$0-2];
		
break;
case 14:

			this.$ = new Array();
			this.$.push($$[$0]);
		
break;
case 19:
 this.$ = $$[$0]; 
break;
case 20:

				this.$ = new FNodoExpresion();
				this.$.IniciarNodo(null, null, "create", $$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column + 1, null);
			
break;
case 21: case 22: case 23: case 24:
 this.$ = yytext; 
break;
case 25:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "||", "||", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 26:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "&&", "&&", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 27:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "|?", "|?", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 28:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "&?", "&?", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 29:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "|&", "|&", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 30:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo(null, $$[$0], "!", "!", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 31:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "==", "==", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 32:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "!=", "!=", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 33:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], ">", ">", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 34:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], ">=", ">=", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 35:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "<", "<", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 36:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "<=", "<=", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 37:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "+", "+", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 38:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "-", "-", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 39:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "*", "*", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 40:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "/", "/", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 41:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "^", "^", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 42:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo($$[$0-2], $$[$0], "%", "%", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 43:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo(null, $$[$0], "-", "-", _$[$0-1].first_line, _$[$0-1].first_column + 1, null);
		
break;
case 44:

			this.$ = $$[$0-1];
		
break;
case 45:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo(null, null, "num", "num", _$[$0].first_line, _$[$0].first_column + 1, yytext);
		
break;
case 46:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo(null, null, "obj", "obj", _$[$0].first_line, _$[$0].first_column + 1, $$[$0]);
		
break;
case 47:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo(null, null, "str", "str", _$[$0].first_line, _$[$0].first_column + 1, yytext);
		
break;
case 48:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo(null, null, "bool", "bool", _$[$0].first_line, _$[$0].first_column + 1, true);
		
break;
case 49:

			this.$ = new FNodoExpresion();
			this.$.IniciarNodo(null, null, "bool", "bool", _$[$0].first_line, _$[$0].first_column + 1, false);
		
break;
case 50:

				this.$ = new FNodoExpresion();
				this.$.IniciarNodo(null, null, "null", "null", _$[$0].first_line, _$[$0].first_column + 1, null);
			
break;
case 51:

			var ob = new Objeto("variable", $$[$0-1], _$[$0-1].first_line, _$[$0-1].first_column + 1, null, $$[$0], null);
			$$[$0-1].InsertarHijo(ob);
			this.$ = new FNodoExpresion();
			this.$.IniciarNodo(null, null, "obj", "obj", _$[$0-1].first_line, _$[$0-1].first_column + 1, $$[$0-1]);
			
		
break;
case 52:

			var ob = new Objeto("variable", $$[$0], _$[$0].first_line, _$[$0].first_column + 1, null, $$[$01], null);
			this.$ = new FNodoExpresion();
			this.$.IniciarNodo(null, null, "obj", "obj", _$[$0].first_line, _$[$0].first_column + 1, ob);
			
		
break;
case 53:

				$$[$0-1].InsertarHijo($$[$0]);
				this.$ = $$[$0-1];
			
break;
case 55:

				this.$ = new Objeto("variable", $$[$0-1], _$[$0-1].first_line, _$[$0-1].first_column + 1, null, $$[$0], null);
            
break;
case 57:
 this.$ = new Array(); 
break;
case 58:

				$$[$0-2].push($$[$0]);
				this.$ = $$[$0-2];
			
break;
case 59:

				this.$ = new Array();
				this.$.push($$[$0]);
			
break;
}
},
table: [{3:1,4:2,5:[1,3],6:4,7:$V0},{1:[3]},{5:[1,6],6:7,7:$V0},{1:[2,2]},o($V1,[2,4]),{8:[1,8]},{1:[2,1]},o($V1,[2,3]),{9:[1,9]},{10:[1,10]},{6:14,7:$V0,9:$V2,11:11,13:12,14:13,16:15,19:$V3,32:$V4,33:$V5,34:$V6},{6:14,7:$V0,9:$V2,12:[1,21],13:22,14:13,16:15,19:$V3,32:$V4,33:$V5,34:$V6},o($V7,[2,7]),{15:[1,23]},o($V7,[2,9]),{9:[1,25],17:24},{8:[1,26]},o($V8,[2,21]),o($V8,[2,22]),o($V8,[2,23]),o($V8,[2,24]),o([5,7,9,12,19,32,33,34],[2,5]),o($V7,[2,6]),o($V7,[2,8]),{8:[1,27],15:[2,11],22:[1,28]},o($V9,[2,14]),{9:[1,29]},{9:$Va,18:30,25:$Vb,28:31,29:[1,32],30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:[1,44]},{20:45,23:46,24:$Vj},{15:[2,10]},{15:[2,19],35:$Vk,36:$Vl,37:$Vm,38:$Vn,39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA},{30:[1,65]},{9:$Va,25:$Vb,28:66,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:67,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:68,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},o($VB,[2,45]),o($VB,[2,46],{58:70,9:[1,69]}),o($VB,[2,47]),o($VB,[2,48]),o($VB,[2,49]),o($VB,[2,50]),o($VB,[2,52],{27:$VC}),o($VD,[2,54]),o($V9,[2,13]),{21:[1,72],23:73,24:$Vj},o($VE,[2,16]),{25:[1,74]},{9:$Va,25:$Vb,28:75,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:76,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:77,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:78,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:79,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:80,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:81,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:82,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:83,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:84,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:85,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:86,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:87,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:88,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:89,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:90,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:$Va,25:$Vb,28:91,30:$Vc,40:$Vd,48:$Ve,53:37,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:43},{9:[1,92]},o($VF,[2,30],{41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA}),o($VB,[2,43]),{31:[1,93],35:$Vk,36:$Vl,37:$Vm,38:$Vn,39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA},o($VB,[2,51],{27:$VC}),o($VD,[2,53]),o($VD,[2,55]),{9:$V2,16:94,32:$V4,33:$V5,34:$V6},o($VE,[2,15]),{26:[1,95],27:[1,96]},o($VG,[2,25],{36:$Vl,38:$Vn,39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA}),o($VH,[2,26],{39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA}),o($VG,[2,27],{36:$Vl,38:$Vn,39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA}),o($VH,[2,28],{39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA}),o($VF,[2,29],{41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA}),o($VI,[2,31],{47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA}),o($VI,[2,32],{47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA}),o($VI,[2,33],{47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA}),o($VI,[2,34],{47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA}),o($VI,[2,35],{47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA}),o($VI,[2,36],{47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA}),o($VJ,[2,37],{49:$Vx,50:$Vy,51:$Vz,52:$VA}),o($VJ,[2,38],{49:$Vx,50:$Vy,51:$Vz,52:$VA}),o($VK,[2,39],{51:$Vz}),o($VK,[2,40],{51:$Vz}),o($VK,[2,41],{51:$Vz}),o($VK,[2,42],{51:$Vz}),{31:[1,97]},o($VB,[2,44]),{15:[2,12]},o($VE,[2,17]),{27:[1,98]},{15:[2,20]},{25:[1,99]},{26:[1,100]},o($VE,[2,18])],
defaultActions: {3:[2,2],6:[2,1],30:[2,10],94:[2,12],97:[2,20]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
break;
case 1:console.log(yy_.yytext);
break;
case 2:console.log(yy_.yytext);
break;
case 3:return 7;
break;
case 4:return 34;
break;
case 5:return 32;
break;
case 6:return 33;
break;
case 7:return 19;
break;
case 8:return 21;
break;
case 9:return 57;
break;
case 10:return 29;
break;
case 11:return 'TgetBool';
break;
case 12:return 'TgetNum';
break;
case 13:return 'TinNum';
break;
case 14:return 'TgetRandom';
break;
case 15:return 'TgetLength';
break;
case 16:return 22;
break;
case 17:return 27;
break;
case 18:return 8;
break;
case 19:return 15;
break;
case 20:return 24;
break;
case 21:return 26;
break;
case 22:return 10;
break;
case 23:return 12;
break;
case 24:return '=';
break;
case 25:return 35;
break;
case 26:return 37;
break;
case 27:return 36;
break;
case 28:return 38;
break;
case 29:return 39;
break;
case 30:return 40;
break;
case 31:return 41;
break;
case 32:return 42;
break;
case 33:return 43;
break;
case 34:return 45;
break;
case 35:return 44;
break;
case 36:return 46;
break;
case 37:console.log(yy_.yytext); return 49;
break;
case 38:console.log(yy_.yytext);return 50;
break;
case 39:console.log(yy_.yytext);return 48;
break;
case 40:console.log(yy_.yytext);return 47;
break;
case 41:console.log(yy_.yytext);return 52
break;
case 42:console.log(yy_.yytext);return 51;
break;
case 43:console.log(yy_.yytext);return 30;
break;
case 44:console.log(yy_.yytext);return 31;
break;
case 45:return 55;
break;
case 46:return 56;
break;
case 47:console.log("numero: "+ yy_.yytext);return 25;
break;
case 48:console.log("id: "+yy_.yytext);return 9;
break;
case 49:console.log("cadena: "+yy_.yytext);yy_.yytext = yy_.yytext.slice(1,-1); return 54;
break;
case 50:console.log("eof");return 5;
break;
case 51:console.log("error lexico");return 'INVALID';
break;
}
},
rules: [/^(?:[\r\n\s]+)/,/^(?:%%[^\n]*)/,/^(?:¿¿[^?]*\?\?)/,/^(?:element\b)/,/^(?:bool\b)/,/^(?:num\b)/,/^(?:str\b)/,/^(?:array\b)/,/^(?:of\b)/,/^(?:NULL\b)/,/^(?:create\b)/,/^(?:getBool\b)/,/^(?:getNum\b)/,/^(?:inNum\b)/,/^(?:getRandom\b)/,/^(?:getLength\b)/,/^(?:,)/,/^(?:\.)/,/^(?::)/,/^(?:;)/,/^(?:\[)/,/^(?:\])/,/^(?:\{)/,/^(?:\})/,/^(?:=)/,/^(?:\|\|)/,/^(?:\|\?)/,/^(?:&&)/,/^(?:&\?)/,/^(?:\|&)/,/^(?:!)/,/^(?:==)/,/^(?:!=)/,/^(?:>)/,/^(?:<)/,/^(?:>=)/,/^(?:<=)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:%)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:true\b)/,/^(?:false\b)/,/^(?:[0-9]+(\.[0-9]+)?)/,/^(?:[A-Za-z][_0-9A-Za-z]*)/,/^(?:"[^"]+")/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = Basic3DElements;
exports.Parser = Basic3DElements.Parser;
exports.parse = function () { return Basic3DElements.parse.apply(Basic3DElements, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}