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
"!"				{return '!';}
"=="			{return '==';}
"="				{return '=';}
"!="			{return '!=';}
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
	| TIPO ':' Id '(' L_PARAMETROS ')' '{' L_SENTENCIA '}'
	| TVoid ':' Id '(' L_PARAMETROS ')' '{' L_SENTENCIA '}'
	| DECLARACION ';'
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
		| TStr '*' Id
		| TIPO Id L_DIMENSIONES
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
		| TBreak Id ';'
		| TContinue ';'
		| TReturn ';'
		| TReturn EXP ';'
		| FUNCIONES_PRIMITIVAS ';'
		| EXEPTION ';'
		;

EXEPTION
		: TThrows '(' EXCEPCIONES ')'
		;

FUNCIONES_PRIMITIVAS
					: FUNCIONES_PRIMITIVAS_VOID
					| FUNCIONES_PRIMITIVAS_VALOR
					;

FUNCIONES_PRIMITIVAS_VOID
						: ToutStr '(' EXP ')'
						| ToutNum '(' EXP ',' EXP ')'
						| TinStr '(' Id ',' EXP ')'
						| TShow '(' EXP ')'
						;

EXCEPCIONES
			: TNullPointerException
			| TMissingReturnStatement
			| TArithmeticException
			| TStackOverFlowException
			| THeapOverFlowException
			| TPoolOverFlowException
			;

FUNCIONES_PRIMITIVAS_VALOR
							: TgetBool '(' EXP ')'
							| TgetNum '(' EXP ',' Cadena ',' EXP ')'
							| TinNum '(' EXP ',' EXP ')'
							| TgetRandom '('  ')'
							| TgetLength '(' Id ',' EXP ')'
							| TgetLength '(' EXP ')'
							;

ASIGNACION 
			: Id '=' VALOR 
			| Id L_DIMENSIONESA '=' VALOR
			;

L_DIMENSIONESA
				: L_DIMENSIONESA DIMENSIONA
				| DIMENSIONA
				;

DIMENSIONA 
			: '[' EXP ']'
			;

DECLARACION
			: TIPO L_ID ':' VALOR
				{
					$$ = new Array();
					for(var i = 0; i < $2.length; i++){
						var de = new Declaracion($1, $2[i], @1.first_line, @1.first_column + 1, $4, null);
						var simbolo = new Simbolo ($1, $2[i], "declaracion", 0, 1, @1.first_line, @1.first_column + 1, new Array(), de);
						de.Simbolo = simbolo;
						$$.push(simbolo);
					}				
				}
			| TIPO L_ID
				{
					$$ = new Array();
					for(var i = 0; i < $2.length; i++){
						var de = new Declaracion($1, $2[i], @1.first_line, @1.first_column + 1, null, null);
						var simbolo = new Simbolo ($1, $2[i], "declaracion", 0, 1, @1.first_line, @1.first_column + 1, new Array(), de);
						de.Simbolo = simbolo;
						$$.push(simbolo);
					}				
				}
			| TArray ':' Id L_DIMENSIONES TOf TIPO
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
			| DIMENSION;

DIMENSION
		: '[' Num ']'
		| '[' Num '.' '.' Num ']'
		;

VALOR 
		: EXP
		| TCreate '(' Id ')'
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

			| TIf '(' EXP ')' TThen '{' L_SENTENCIA '}' TElse '{' LSENTENCIA '}'
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
				;

SENTENCIA_DO
			: TDo '{' L_SENTENCIA '}' TWhile '(' EXP ')'
			;

SENTENCIA_REPEAT
				: TRepeat '{' L_SENTENCIA '}' TUntil '(' EXP ')'
				;

SENTENCIA_FOR
			: TFor '(' ASIGNACION ';' EXP ';' ASIGNACION_SIMPLIFICADA ')' '{' L_SENTENCIA '}'
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
    ;

	OBJETO
		: Id HIJO
			{
				$$ = new Objeto("variable", $1, @1.first_line, @1.first_column + 1, null, $2, null);
			}
		| Id L_DIMENSIONESA 
		| Id '('L_EXPS')' HIJO
			{
				var llamada = new LlamadaMetodo($1, @1.first_line, @1.first_column + 1, $3, null);
				$$ = new Objeto("metodo", $1, @1.first_line, @1.first_column + 1, llamada, $5, null);
			}
		;

	HIJO
		: Id HIJO
			{
				$$ = new Objeto("variable", $1, @1.first_line, @1.first_column + 1, null, $2, null);
			}
		| Id L_DIMENSIONESA 
		| Id '(' L_EXPS ')' HIJO
			{
				var llamada = new LlamadaMetodo($1, @1.first_line, @1.first_column + 1, $3, null);
				$$ = new Objeto("metodo", $1, @1.first_line, @1.first_column + 1, llamada, $5, null);
			}
		| {$$ = null;}
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