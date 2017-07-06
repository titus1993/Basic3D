/* lexical grammar */


%lex
%%
///<reference path="../Ejecucion/Funciones.js" />
[\r\n\s]+       {}            /* skip whitespace */
"%%"[^\n]*		{console.log(yytext);}
"¿¿"[^?]*"??"	{console.log(yytext);}

"bool"			{return 'TBool';}
"num"			{return 'TNum';}
"str"			{return 'TStr';}
"array"			{return 'TArray';}
"void"			{return 'TVoid';}

"of"			{return 'TOf';}
"NULL"			{return 'TNull';}
"create"		{return 'TCreate';}
"getBool"		{return 'TgetBool';}
"getNum"		{return 'TgetNum';}
"inNum"			{return 'TinNum';}
"getRandom"		{return 'TgetRandom';}
"getLength"		{return 'TgetLength';}

"Principal"		{return 'TPrincipal';}
"if"		{return 'TIf';}
"then"		{return 'TThen';}
"else"		{return 'TElse';}
"switch"		{return 'TSwitch';}
"case"		{return 'TCase';}
"default"		{return 'TDefault';}
"break"			{return 'TBreak';}
"continue"		{return 'TContinue';}
"return"		{return 'TReturn';}
"while"			{return 'TWhile';}
"do"			{return 'TDo';}
"repeat"		{return 'TRepeat';}
"until"			{return 'TUntil';}
"for"			{return 'TFor';}
"loop"			{return 'TLoop';}
"count"			{return 'TCount';}
"whilex"		{return 'TWhilex';}
"getBool"		{return 'TgetBool';}
"getNum"		{return 'TgetNum';}
"outStr"		{return 'ToutStr';}
"outNum"		{return 'ToutNum';}
"inStr"			{return 'TinStr';}
"inNum"			{return 'TinNum';}
"show"			{return 'TShow';}
"getRandom"		{return 'TgetRandom';}
"getLengh"		{return 'TgetLength';}
"NullPointerException"		{return 'TNullPointerException';}
"MissingReturnStatement"	{return 'TMissingReturnStatement';}
"ArithmeticException"		{return 'TArithmeticException';}
"StackOverFlowException"	{return 'TStackOverFlowException';}
"HeapOverFlowException"		{return 'THeapOverFlowException';}
"PoolOverFlowException"		{return 'TPoolOverFlowException';}
"throws"		{return 'TThrows';}

","				{return ',';}
"."				{return '.';}
":"				{return ':';}
";"				{return ';';}
"["				{return '[';}
"]"				{return ']';}
"{"				{return '{';}
"}"				{return '}';}

"++"			{return '++';}
"--"			{return '--';}
"||"			{return '||';}
"|?"			{return '|?';}
"&&"			{return '&&';}
"&?"			{return '&?';}
"|&"			{return '|&';}
"!="			{return '!=';}
"!"				{return '!';}
"=="			{return '==';}
"="				{return '=';}
">="			{return '>=';}
"<="			{return '<=';}
">"				{return '>';}
"<"				{return '<';}
"*"                   {console.log(yytext); return '*';}
"/"                   {console.log(yytext);return '/';}
"-"                   {console.log(yytext);return '-';}
"+"                   {console.log(yytext);return '+';}
"%"					  {console.log(yytext);return '%'}
"^"                   {console.log(yytext);return '^';}
"("                   {console.log(yytext);return '(';}
")"                   {console.log(yytext);return ')';}

"true"	{return 'Verdadero';}
"false"			{return 'Falso';}
[0-9]+("."[0-9]+)?  {console.log("numero: "+ yytext);return 'Num';}
[A-Za-z][_0-9A-Za-z]* {console.log("id: "+yytext);return 'Id';}
\"[^"]+\"         {console.log("cadena: "+yytext);yytext = yytext.slice(1,-1); return 'Cadena';}
"'"[^']"'"         {console.log("caracter: "+yytext);yytext = yytext.slice(1,-1); return 'Caracter';}

<<EOF>>               {console.log("eof");return 'EOF';}
.                     {console.log("error lexico");return 'INVALID';}



/lex

/* operator associations and precedence */
%left '||' '|?'
%left '&&' '&?'
%left '|&'
%right '!'

%left '==' '!=' '>' '<' '>=' '<='

%left '+' '-'
%left '*' '/' '%'
%right '^'
%left UMINUS


%start INICIO

%% /* language grammar */

INICIO
    : L_METODOS EOF
        {
			TablaSimbolos = $1;
		}
    ;

TIPO 
	: TNum { $$ = yytext; }
	| TStr { $$ = yytext; }
	| TBool { $$ = yytext; }
	| Id { $$ = yytext; }
	;


L_METODOS
	: L_METODOS METODO
		{
			for(var i = 0; i < $2.length; i++){
				$1.push($2[i]);
		}
		$$ = $1;
		}
	| METODO 
		{
			$$ = $1;
		}
	;

METODO
	: TPrincipal '(' ')' '{' L_SENTENCIA '}'
		{
			var metodo = new Metodo("void", "principal", @1.first_line, @1.first_column + 1, new Array(), null);
			var simbolo = new Simbolo ("void", "principal", "metodo", -1, 0, @1.first_line, @1.first_column + 1, $5, metodo);
			for(var i =0; i < $5.length; i++){
				$5[i].Padre = simbolo;
				simbolo.Size = simbolo.Size + $5[i].Size;
			}
			for(var i =0; i < $5.length; i++){
				$5[i].setPos(position);
			}
			position = 0;
			metodo.Simbolo = simbolo;
			$$ = new Array();
			$$.push(simbolo);
		}
	| TIPO '['']' '['']' ':' Id '(' L_PARAMETROS ')' '{' L_SENTENCIA '}'
		{
			var metodo = new Metodo($1 + "[]", $7, @1.first_line, @1.first_column + 1, $9, null);
			var simbolo = new Simbolo ($1 + "[]", $7, "metodo", -1, 0, @1.first_line, @1.first_column + 1, $12, metodo);
			for(var i = 0; i < $9.length; i++){
				$9[i].Padre = simbolo;
				simbolo.Size = simbolo.Size + $9[i].Size;
			}
			for(var i = 0; i < $12.length; i++){
				$12[i].Padre = simbolo;
				simbolo.Size = simbolo.Size + $12[i].Size;
			}
			for(var i =0; i < $9.length; i++){
				$9[i].setPos(position);
			}
			for(var i =0; i < $12.length; i++){
				$12[i].setPos(position);
			}
			position = 0;
			metodo.Simbolo = simbolo;
			$$ = new Array();
			$$.push(simbolo);
		}
	| TIPO ':' Id '(' L_PARAMETROS ')' '{' L_SENTENCIA '}'
		{
			var metodo = new Metodo($1, $3, @1.first_line, @1.first_column + 1, $5, null);
			var simbolo = new Simbolo ($1, $3, "metodo", -1, 0, @1.first_line, @1.first_column + 1, $8, metodo);
			for(var i = 0; i < $5.length; i++){
				$5[i].Padre = simbolo;
				simbolo.Size = simbolo.Size + $5[i].Size;
			}
			for(var i = 0; i < $8.length; i++){
				$8[i].Padre = simbolo;
				simbolo.Size = simbolo.Size + $8[i].Size;
			}
			for(var i =0; i < $5.length; i++){
				$5[i].setPos(position);
			}
			for(var i =0; i < $8.length; i++){
				$8[i].setPos(position);
			}
			position = 0;
			metodo.Simbolo = simbolo;
			$$ = new Array();
			$$.push(simbolo);
		}
	| TVoid ':' Id '(' L_PARAMETROS ')' '{' L_SENTENCIA '}'
		{
			var metodo = new Metodo($1, $3, @1.first_line, @1.first_column + 1, $5, null);
			var simbolo = new Simbolo ($1, $3, "metodo", -1, 0, @1.first_line, @1.first_column + 1, $8, metodo);
			for(var i = 0; i < $5.length; i++){
				$5[i].Padre = simbolo;
				simbolo.Size = simbolo.Size + $5[i].Size;
			}
			for(var i = 0; i < $8.length; i++){
				$8[i].Padre = simbolo;
				simbolo.Size = simbolo.Size + $8[i].Size;
			}
			for(var i =0; i < $5.length; i++){
				$5[i].setPos(position);
			}
			for(var i =0; i < $8.length; i++){
				$8[i].setPos(position);
			}
			position = 0;
			metodo.Simbolo = simbolo;
			$$ = new Array();
			$$.push(simbolo);
		}
	| DECLARACION ';' 
		{
			$$ = $1;
		}
	;

L_PARAMETROS
			: L_PARAMETRO { $$ = $1; }
			| { $$ = new Array(); }
			;
L_PARAMETRO
			: L_PARAMETRO ',' PARAMETRO 
				{ 
					$1.push($3);
					$$ = $1;
				}
			| PARAMETRO 
				{ 
					$$ = new Array();
					$$.push($1);
				}
			;

PARAMETRO
		: TIPO Id
			{				
				var de = new Declaracion($1, $2, null, null);
				var simbolo = new Simbolo ($1, $2, "declaracion", 0, 1, @1.first_line, @1.first_column + 1, new Array(), de);
				de.Simbolo = simbolo;
				$$ = simbolo;								
			}
		| TStr '*' Id
			{				
				var de = new Declaracion($1+"*", $3, null, null);
				var simbolo = new Simbolo ($1, $3, "declaracion", 0, 1, @1.first_line, @1.first_column + 1, new Array(), de);
				de.Simbolo = simbolo;
				$$ = simbolo;								
			}
		| TIPO Id L_DIMENSIONES
			{
				var de = new DeclaracionArreglo($1, $2, $3, null);
				var simbolo = new Simbolo ($1, $2, "declaracionarreglo", 0, 1, @1.first_line, @1.first_column + 1, new Array(), de);
				de.Simbolo = simbolo;
				$$ = simbolo;
			}
		;

L_SENTENCIA 
		: L_SENTENCIAS {$$ = $1;}
		| {$$ = new Array();}
		;

L_SENTENCIAS
			: L_SENTENCIAS SENTENCIA 
				{					
					for(var i = 0; i < $2.length; i++){
						$1.push($2[i]);
					}
					$$ = $1;
				}
			| SENTENCIA 
				{
					$$ = $1;
				}
			;
SENTENCIA 
		: DECLARACION ';' 
			{ 
				$$ = $1; 
			}
		| ASIGNACION ';'
			{ 
				$$ = new Array();
				$$.push($1); 
			}
		| SENTENCIA_IF 
			{ 
				$$ = new Array();
				$$.push($1); 
			}
		| SENTENCIA_SWITCH 
			{ 
				$$ = new Array();
				$$.push($1); 
			}
		| SENTENCIA_WHILE	
			{ 
				$$ = new Array();
				$$.push($1); 
			}
		| SENTENCIA_DO 
			{ 
				$$ = new Array();
				$$.push($1); 
			}
		| SENTENCIA_REPEAT
			{ 
				$$ = new Array();
				$$.push($1); 
			}
		| SENTENCIA_FOR 
			{ 
				$$ = new Array();
				$$.push($1); 
			}
		| SENTENCIA_LOOP 
			{ 
				$$ = new Array();
				$$.push($1); 
			}
		| SENTENCIA_COUNT 
			{ 
				$$ = new Array();
				$$.push($1); 
			}
		| SENTENCIA_WHILEX 
			{ 
				$$ = new Array();
				$$.push($1); 
			}
		| TBreak ';' 
			{
				$$ = new Array();				 
				var simbolo = new Simbolo ("break", "break", "break", 0, -1, @1.first_line, @1.first_column + 1, new Array(), null);
				$$.push(simbolo);
			}
		| TBreak Id ';'
			{
				$$ = new Array();				 
				var simbolo = new Simbolo ("break", "break", "break", 0, -1, @1.first_line, @1.first_column + 1, new Array(), $2);
				$$.push(simbolo);
			}
		| TContinue ';'
			{
				$$ = new Array();				 
				var simbolo = new Simbolo ("break", "break", "break", 0, -1, @1.first_line, @1.first_column + 1, new Array(), null);
				$$.push(simbolo);
			}
		| TReturn ';'
			{
				$$ = new Array();				 
				var simbolo = new Simbolo ("return", "return", "return", 0, -1, @1.first_line, @1.first_column + 1, new Array(), null);
				$$.push(simbolo);
			}
		| TReturn EXP ';'
			{
				$$ = new Array();				 
				var simbolo = new Simbolo ("return", "return", "return", 0, -1, @1.first_line, @1.first_column + 1, new Array(), $2);
				$$.push(simbolo);
			}
		| FUNCIONES_PRIMITIVAS ';'
		| EXEPTION ';'
			{
			$$ = new Array();
				$$.push($1); 	
			}
		| OBJETO Id '('L_EXPS ')'
			{
				var llamada = new LlamadaMetodo($2, @1.first_line, @1.first_column + 1, $4, null);
				var ob = new Objeto("metodo", $2, @1.first_line, @1.first_column + 1, llamada, null, null);
				$1.InsertarHijo(ob);
				$$ = new Simbolo ("obj", "obj", "obj", 0, 1, @1.first_line, @1.first_column + 1, new Array(), ob);
				
			}
		| Id '('L_EXPS ')'
			{
				var llamada = new LlamadaMetodo($1, @1.first_line, @1.first_column + 1, $3, null);
				var ob = new Objeto("metodo", $1, @1.first_line, @1.first_column + 1, llamada, null, null);
				$$  = new Simbolo ("obj", "obj", "obj", 0, 1, @1.first_line, @1.first_column + 1, new Array(), ob);
			
			}
		;

EXEPTION
		: TThrows '(' EXCEPCIONES ')'
			{
				var simbolo = new Simbolo ("excepcion", "excepcion", "excepcion", -1, 0, @1.first_line, @1.first_column + 1, new Array(), $3);
				$$ = new Array();
				$$.push(simbolo);
			}
		;

FUNCIONES_PRIMITIVAS
					: FUNCIONES_PRIMITIVAS_VOID
					| FUNCIONES_PRIMITIVAS_VALOR
					;

FUNCIONES_PRIMITIVAS_VOID
						: ToutStr '(' EXP ')'
							{
								var p = new Primitiva($1, $3, null, null, null);
								var simbolo = new Simbolo ("primitiva", "primitva", "primitiva", -1, 0, @1.first_line, @1.first_column + 1, new Array(), p);
								p.Simbolo = simbolo;
								$$ = simbolo;
							}
						| ToutNum '(' EXP ',' EXP ')'
							{
								var p = new Primitiva($1, $3, $5, null, null);
								var simbolo = new Simbolo ("primitiva", "primitva", "primitiva", -1, 0, @1.first_line, @1.first_column + 1, new Array(), p);
								p.Simbolo = simbolo;
								$$ = simbolo;
							}
						| TinStr '(' Id ',' EXP ')'
							{
								var p = new Primitiva($1, $3, $5, null, null);
								var simbolo = new Simbolo ("primitiva", "primitva", "primitiva", -1, 0, @1.first_line, @1.first_column + 1, new Array(), p);
								p.Simbolo = simbolo;
								$$ = simbolo;
							}
						| TShow '(' EXP ')'
							{
								var p = new Primitiva($1, $3, null, null, null);
								var simbolo = new Simbolo ("primitiva", "primitva", "primitiva", -1, 0, @1.first_line, @1.first_column + 1, new Array(), p);
								p.Simbolo = simbolo;
								$$ = simbolo;
							}
						;

EXCEPCIONES
			: TNullPointerException { $$ = yytext; }
			| TMissingReturnStatement { $$ = yytext; }
			| TArithmeticException { $$ = yytext; }
			| TStackOverFlowException { $$ = yytext; }
			| THeapOverFlowException { $$ = yytext; }
			| TPoolOverFlowException { $$ = yytext; }
			;

FUNCIONES_PRIMITIVAS_VALOR
							: TgetBool '(' EXP ')'
								{
									var p = new Primitiva($1, $3, null, null, null);
									var simbolo = new Simbolo ("primitiva", "primitva", "primitiva", -1, 0, @1.first_line, @1.first_column + 1, new Array(), p);
									p.Simbolo = simbolo;
									$$ = simbolo;
								}
							| TgetNum '(' EXP ',' Cadena ',' EXP ')'
								{
									var p = new Primitiva($1, $3, $5, $7, null);
									var simbolo = new Simbolo ("primitiva", "primitva", "primitiva", -1, 0, @1.first_line, @1.first_column + 1, new Array(), p);
									p.Simbolo = simbolo;
									$$ = simbolo;
								}
							| TinNum '(' EXP ',' EXP ')'
								{
									var p = new Primitiva($1, $3, $5, null, null);
									var simbolo = new Simbolo ("primitiva", "primitva", "primitiva", -1, 0, @1.first_line, @1.first_column + 1, new Array(), p);
									p.Simbolo = simbolo;
									$$ = simbolo;
								}
							| TgetRandom '('  ')'
								{
									var p = new Primitiva($1, null, null, null, null);
									var simbolo = new Simbolo ("primitiva", "primitva", "primitiva", -1, 0, @1.first_line, @1.first_column + 1, new Array(), p);
									p.Simbolo = simbolo;
									$$ = simbolo;
								}
							| TgetLength '(' Id ',' EXP ')'
								{
									var p = new Primitiva($1, $3, $5, null, null);
									var simbolo = new Simbolo ("primitiva", "primitva", "primitiva", -1, 0, @1.first_line, @1.first_column + 1, new Array(), p);
									p.Simbolo = simbolo;
									$$ = simbolo;
								}
							| TgetLength '(' EXP ')' 
								{
									var p = new Primitiva($1, $3, null, null, null);
									var simbolo = new Simbolo ("primitiva", "primitva", "primitiva", -1, 0, @1.first_line, @1.first_column + 1, new Array(), p);
									p.Simbolo = simbolo;
									$$ = simbolo;
								}
							;

ASIGNACION 
			: OBJETO Id '=' EXP
				{
					var ob = new Objeto("variable", $1, @1.first_line, @1.first_column + 1, null, null, null);
					$1.InsertarHijo(ob);
					var asi = new Asignacion ($1, $4, null);
					var simbolo = new Simbolo ("asignacion", "asignacion", "asignacion", -1, 0, @1.first_line, @1.first_column + 1, new Array(), asi);
					asi.Simbolo = simbolo;		
					$$ = simbolo;
				}
			| OBJETO Id L_DIMENSIONESA '=' EXP
				{
					var llamada = new LlamadaArreglo($2, @1.first_line, @1.first_column + 1, $3, null);
					var ob = new Objeto("arreglo", $2, @1.first_line, @1.first_column + 1, llamada, null, null);
					$1.InsertarHijo(ob);
					var asi = new AsignacionArreglo (ob, $3, $5, null);
					var simbolo = new Simbolo ("asignacion", "asignacion", "asignacion", -1, 0, @1.first_line, @1.first_column + 1, new Array(), asi);
					asi.Simbolo = simbolo;		
					$$ = simbolo;
			
				}
			| Id '=' EXP
				{
					var ob = new Objeto("variable", $1, @1.first_line, @1.first_column + 1, null, null, null);
					var asi = new Asignacion (ob, $3, null);
					var simbolo = new Simbolo ("asignacion", "asignacion", "asignacion", -1, 0, @1.first_line, @1.first_column + 1, new Array(), asi);
					asi.Simbolo = simbolo;		
					$$ = simbolo;			
				}
			| Id L_DIMENSIONESA '=' EXP
				{
					var llamada = new LlamadaArreglo($1, @1.first_line, @1.first_column + 1, $2, null);
					var ob = new Objeto("arreglo", $1, @1.first_line, @1.first_column + 1, llamada, null, null);
					var asi = new AsignacionArreglo (ob, $2, $4, null);
					var simbolo = new Simbolo ("asignacion", "asignacion", "asignacion", -1, 0, @1.first_line, @1.first_column + 1, new Array(), asi);
					asi.Simbolo = simbolo;		
					$$ = simbolo;			
				}
			| Id '('L_EXPS ')' '=' EXP
				{
					var llamada = new LlamadaMetodo($1, @1.first_line, @1.first_column + 1, $3, null);
					var ob = new Objeto("metodo", $1, @1.first_line, @1.first_column + 1, llamada, null, null);
					var asi = new AsignacionMetodo (ob, $6, null);
					var simbolo = new Simbolo ("asignacion", "asignacion", "asignacion", -1, 0, @1.first_line, @1.first_column + 1, new Array(), asi);
					asi.Simbolo = simbolo;		
					$$ = simbolo;				
				}
			;

L_DIMENSIONESA
				: L_DIMENSIONESA DIMENSIONA
					{
						for(var i = 0; i < $2.length; i++){
							$1.push($2[i]);
						}
						$$ = $1;
					}
				| DIMENSIONA
					{
						$$ =$1;
					}
				;

DIMENSIONA 
			: '[' EXP ']'
				{
					$$ = new Array();
					$$.push($2);
				}
			;

DECLARACION
			: TIPO L_ID ':' VALOR
				{
					$$ = new Array();
					for(var i = 0; i < $2.length; i++){
						var de = new Declaracion($1, $2[i], $4, null);
						var simbolo = new Simbolo ($1, $2[i], "declaracion", 0, 1, @1.first_line, @1.first_column + 1, new Array(), de);
						de.Simbolo = simbolo;
						$$.push(simbolo);
					}				
				}
			| TIPO L_ID
				{
					$$ = new Array();
					for(var i = 0; i < $2.length; i++){
						var de = new Declaracion($1, $2[i], null, null);
						var simbolo = new Simbolo ($1, $2[i], "declaracion", 0, 1, @1.first_line, @1.first_column + 1, new Array(), de);
						de.Simbolo = simbolo;
						$$.push(simbolo);
					}				
				}
			| TArray ':' Id L_DIMENSIONES TOf TIPO 
				{
					$$ = new Array();
					var de = new DeclaracionArreglo($6, $3, $4, null);
					var simbolo = new Simbolo ($6, $3, "declaracionarreglo", 0, 1, @1.first_line, @1.first_column + 1, new Array(), de);
					de.Simbolo = simbolo;
					$$.push(simbolo);

				}
			;
L_ID 
	: L_ID ',' Id
		{
			$1.push($3);
			$$ = $1;
		}
	| Id 
		{
			$$ = new Array();
			$$.push($1);
		}
	;

L_DIMENSIONES 
			: L_DIMENSIONES DIMENSION
				{
					for(var i = 0; i < $2.length; i++){
						$1.push($2[i]);
					}
					$$ = $1;
				}				
			| DIMENSION
				{
					$$ =$1;
				}
			;

DIMENSION
		: '[' Num ']' 
			{
				$$ = new Array();
				$$.push(new Dimension(1, $2));
			}
		| '[' Num '.' '.' Num ']'
			{
				$$ = new Array();
				$$.push(new Dimension($2, $5));
			}
		;

VALOR 
		: EXP { $$ = $1; }
		| TCreate '(' Id ')'
			{
				$$ = new FNodoExpresion();
				$$.IniciarNodo(null, null, "create", $3, @1.first_line, @1.first_column + 1, null);
			}
		;


SENTENCIA_IF
			: TIf '(' EXP ')' TThen '{' L_SENTENCIA '}' 
				{		
					var si = new If($3, $7, null);
					var simbolo = new Simbolo ("if", "if", "if", -1, 0, @1.first_line, @1.first_column + 1, $7, si);
					si.Simbolo = simbolo;

					for(var i =0; i < $7.length; i++){
						$7[i].Padre = simbolo;
						if($7[i].Rol == "declaracion"){
							simbolo.Size++;
						}else{
							simbolo.Size = simbolo.Size + $7[i].Size;							
						}
					}					
					$$ = simbolo;					
				}

			| TIf '(' EXP ')' TThen '{' L_SENTENCIA '}' TElse '{' L_SENTENCIA '}'
				{		
					var sino = new IfElse($3, $7, $11, null);
					var simbolo = new Simbolo ("ifelse", "ifelse", "ifelse", -1, 0, @1.first_line, @1.first_column + 1, $7, sino);
					sino.Simbolo = simbolo;

					for(var i =0; i < $7.length; i++){
						$7[i].Padre = simbolo;
						if($7[i].Rol == "declaracion"){
							simbolo.Size++;
						}else{
							simbolo.Size = simbolo.Size + $7[i].Size;							
						}
					}		
					
					for(var i =0; i < $11.length; i++){
						$11[i].Padre = simbolo;
						if($11[i].Rol == "declaracion"){
							simbolo.Size++;
						}else{
							simbolo.Size = simbolo.Size + $11[i].Size;							
						}
					}		
					$$ = simbolo;					
				}
			;

SENTENCIA_SWITCH
				: TSwitch '(' EXP ',' MODO ')' '{' L_CASOS DEFECTO '}'
				| TSwitch '(' EXP ',' MODO ')' '{' L_CASOS '}'
				;

MODO
	: Verdadero {$$ = true;}
	| Falso {$$ = false;}
	;

L_CASOS 
		: L_CASOS CASO 
			{
				$1.push($2);
				$$ = $1;
			}
		| CASO 
			{
				$$ = new Array();
				Array.push($1);
			}
		;

CASO 
	: TCase VALOR_CASE ':' L_SENTENCIA
	| TCase Num '-' Num ':' L_SENTENCIA
	| TCase Caracter '-' Caracter ':' L_SENTENCIA
	;

DEFECTO
		: TDefecto ':' L_SENTENCIA
		;

VALOR_CASE 
			: Num 
				{
					$$ = new FNodoExpresion();
					$$.IniciarNodo(null, null, "num", "num", @1.first_line, @1.first_column + 1, yytext);
				}
			| Cadena 
				{
					$$ = new FNodoExpresion();
					$$.IniciarNodo(null, null, "str", "str", @1.first_line, @1.first_column + 1, yytext);
				}
			;

SENTENCIA_WHILE
				: TWhile '(' EXP ')' '{' L_SENTENCIA '}'
					{		
						var whi = new While($3, $6, null);
						var simbolo = new Simbolo ("while", "while", "while", -1, 0, @1.first_line, @1.first_column + 1, $6, whi);
						whi.Simbolo = simbolo;

						for(var i =0; i < $6.length; i++){
							$6[i].Padre = simbolo;
							if($6[i].Rol == "declaracion"){
								simbolo.Size++;
							}else{
								simbolo.Size = simbolo.Size + $6[i].Size;							
							}
						}					
						$$ = simbolo;					
					}
				;

SENTENCIA_DO
			: TDo '{' L_SENTENCIA '}' TWhile '(' EXP ')'
				{		
					var dowhile = new Do($7, $3, null);
					var simbolo = new Simbolo ("do", "do", "do", -1, 0, @1.first_line, @1.first_column + 1, $3, dowhile);
					dowhile.Simbolo = simbolo;

					for(var i =0; i < $3.length; i++){
						$3[i].Padre = simbolo;
						if($3[i].Rol == "declaracion"){
							simbolo.Size++;
						}else{
							simbolo.Size = simbolo.Size + $3[i].Size;							
						}
					}					
					$$ = simbolo;					
				}
			;

SENTENCIA_REPEAT
				: TRepeat '{' L_SENTENCIA '}' TUntil '(' EXP ')'
					{		
						var rep = new Repeat($7, $3, null);
						var simbolo = new Simbolo ("repeat", "repeat", "repeat", -1, 0, @1.first_line, @1.first_column + 1, $3, rep);
						rep.Simbolo = simbolo;

						for(var i =0; i < $3.length; i++){
							$3[i].Padre = simbolo;
							if($3[i].Rol == "declaracion"){
								simbolo.Size++;
							}else{
								simbolo.Size = simbolo.Size + $3[i].Size;							
							}
						}					
						$$ = simbolo;					
					}
				;

SENTENCIA_FOR
			: TFor '(' ASIGNACION ';' EXP ';' ASIGNACION_SIMPLIFICADA ')' '{' L_SENTENCIA '}'
				{
					var f = new For($3, $5, $7, $10, null);
					var simbolo = new Simbolo ("for", "for", "for", -1, 0, @1.first_line, @1.first_column + 1, $10, f);
					f.Simbolo = simbolo;
					//asignamos el padre a la asignacion o declaracion
					
					for(var i =0; i < $3.length; i++){
						$3[i].Padre = simbolo;
						if($3[i].Rol == "declaracion"){
							simbolo.Size++;
						}else{
							simbolo.Size = simbolo.Size + $3[i].Size;							
						}
					}
					
					//asignamos el padre a la accion posterior
					for(var i =0; i < $3.length; i++){
						$3[i].Padre = simbolo;
						if($3[i].Rol == "declaracion"){
							simbolo.Size++;
						}else{
							simbolo.Size = simbolo.Size + $3[i].Size;							
						}
					}

					//asignamos el padre al cuerpo
					for(var i =0; i < $3.length; i++){
						$3[i].Padre = simbolo;
						if($3[i].Rol == "declaracion"){
							simbolo.Size++;
						}else{
							simbolo.Size = simbolo.Size + $3[i].Size;							
						}
					}
					$$ = simbolo;
				}
			;

ASIGNACION_SIMPLIFICADA 
						: Id '++'
						| Id '--'
						;

SENTENCIA_LOOP
				: TLoop Id '{' L_SENTENCIA '}'
				;

SENTENCIA_COUNT
				: TCount '(' EXP ')' '{' L_SENTENCIA '}'
				;

SENTENCIA_WHILEX
				: TDo '{' L_SENTENCIA '}' TWhilex '(' EXP ',' EXP ')'
				;
EXP
    : EXP '||' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "||", "||", @2.first_line, @2.first_column + 1, null);
		}
	| EXP '&&' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "&&", "&&", @2.first_line, @2.first_column + 1, null);
		}
	| EXP '|?' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "|?", "|?", @2.first_line, @2.first_column + 1, null);
		}
	| EXP '&?' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "&?", "&?", @2.first_line, @2.first_column + 1, null);
		}
	| EXP '|&' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "|&", "|&", @2.first_line, @2.first_column + 1, null);
		}
	| '!' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, $2, "!", "!", @1.first_line, @1.first_column + 1, null);
		}
	| EXP '==' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "==", "==", @2.first_line, @2.first_column + 1, null);
		}
	| EXP '!=' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "!=", "!=", @2.first_line, @2.first_column + 1, null);
		}
	| EXP '>' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, ">", ">", @2.first_line, @2.first_column + 1, null);
		}
	| EXP '>=' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, ">=", ">=", @2.first_line, @2.first_column + 1, null);
		}
	| EXP '<' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "<", "<", @2.first_line, @2.first_column + 1, null);
		}
	| EXP '<=' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "<=", "<=", @2.first_line, @2.first_column + 1, null);
		}
	| EXP '+' EXP
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "+", "+", @2.first_line, @2.first_column + 1, null);
		}
    | EXP '-' EXP
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "-", "-", @2.first_line, @2.first_column + 1, null);
		}
    | EXP '*' EXP
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "*", "*", @2.first_line, @2.first_column + 1, null);
		}
    | EXP '/' EXP
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "/", "/", @2.first_line, @2.first_column + 1, null);
		}
    | EXP '^' EXP
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "^", "^", @2.first_line, @2.first_column + 1, null);
		}
	| EXP '%' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "%", "%", @2.first_line, @2.first_column + 1, null);
		}
    | '-' EXP %prec UMINUS
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, $2, "-", "-", @1.first_line, @1.first_column + 1, null);
		}
    | '(' EXP ')'
        {
			$$ = $2;
		}
    | Num
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "num", "num", @1.first_line, @1.first_column + 1, yytext);
		}
	| OBJETO 
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "obj", "obj", @1.first_line, @1.first_column + 1, $1);
		}
	| Cadena 
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "str", "str", @1.first_line, @1.first_column + 1, yytext);
		}
	| Verdadero 
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "bool", "bool", @1.first_line, @1.first_column + 1, true);
		}
	| Falso 
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "bool", "bool", @1.first_line, @1.first_column + 1, false);
		}
	| TNull {
				$$ = new FNodoExpresion();
				$$.IniciarNodo(null, null, "null", "null", @1.first_line, @1.first_column + 1, null);
			}
	| OBJETO Id 
		{
			var ob = new Objeto("variable", $1, @1.first_line, @1.first_column + 1, null, null, null);
			$1.InsertarHijo(ob);
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "obj", "obj", @1.first_line, @1.first_column + 1, $1);
			
		}
	| OBJETO Id L_DIMENSIONESA
		{
			var llamada = new LlamadaArreglo($2, @1.first_line, @1.first_column + 1, $3, null);
			var ob = new Objeto("arreglo", $2, @1.first_line, @1.first_column + 1, llamada, null, null);
			$1.InsertarHijo(ob);
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "obj", "obj", @1.first_line, @1.first_column + 1, $1);
		}
	| Id
		{
			var ob = new Objeto("variable", $1, @1.first_line, @1.first_column + 1, null, null, null);
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "obj", "obj", @1.first_line, @1.first_column + 1, ob);
		}
	| Id L_DIMENSIONESA
		{
			var llamada = new LlamadaArreglo($1, @1.first_line, @1.first_column + 1, $2, null);
			var ob = new Objeto("arreglo", $1, @1.first_line, @1.first_column + 1, llamada, null, null);
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "obj", "obj", @1.first_line, @1.first_column + 1, ob);
		}
	| OBJETO Id '('L_EXPS ')'
		{
			var llamada = new LlamadaMetodo($2, @1.first_line, @1.first_column + 1, $4, null);
			var ob = new Objeto("metodo", $2, @1.first_line, @1.first_column + 1, llamada, null, null);
			$1.InsertarHijo(ob);
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "obj", "obj", @1.first_line, @1.first_column + 1, $1);
		}
	| Id '('L_EXPS ')'
		{
			var llamada = new LlamadaMetodo($1, @1.first_line, @1.first_column + 1, $3, null);
			var ob = new Objeto("metodo", $1, @1.first_line, @1.first_column + 1, llamada, null, null);
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "obj", "obj", @1.first_line, @1.first_column + 1, ob);			
		}
    ;

	OBJETO
		: OBJETO HIJO
			{
				$1.InsertarHijo($2);
				$$ = $1;
			}
		| HIJO
			{
				$$ = $1;
			}
		;

	HIJO
		: Id '.'
			{
				$$ = new Objeto("variable", $1, @1.first_line, @1.first_column + 1, null, $2, null);
            }
		| Id '('L_EXPS ')' '.'
			{
				var llamada = new LlamadaMetodo($1, @1.first_line, @1.first_column + 1, $3, null);
				$$ = new Objeto("metodo", $1, @1.first_line, @1.first_column + 1, llamada, $5, null);
			}
		;

	L_EXPS 
		: L_EXP 
			{
				$$ = $1;
			}
		| { $$ = new Array(); }
		;

	L_EXP
		: L_EXP ',' EXP
			{
				$1.push($3);
				$$ = $1;
			}
		| EXP 
			{
				$$ = new Array();
				$$.push($1);
			}
		;