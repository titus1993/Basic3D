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
        {return $1;}
    ;

TIPO 
	: TNum
	| TStr
	| TBool
	| Id
	;


L_METODOS
	: L_METODOS METODO
	| METODO
	;

METODO
	: TPrincipal '(' ')' '{' L_SENTENCIA '}'
	| TIPO '['']' '['']' ':' Id '(' L_PARAMETROS ')' '{' L_SENTENCIA '}'
	| TIPO ':' Id '(' L_PARAMETROS ')' '{' L_SENTENCIA '}'
	| TVoid ':' Id '(' L_PARAMETROS ')' '{' L_SENTENCIA '}'
	| DECLARACION ';'
	;

L_PARAMETROS
			: L_PARAMETRO
			|
			;
L_PARAMETRO
			: L_PARAMETRO ',' PARAMETRO
			| PARAMETRO
			;

PARAMETRO
		: TIPO Id
		| TStr '*' Id
		| TIPO Id L_DIMENSIONES
		;

L_SENTENCIA 
		: L_SENTENCIAS
		|
		;

L_SENTENCIAS
			: L_SENTENCIAS SENTENCIA
			| SENTENCIA
			;
SENTENCIA 
		: DECLARACION ';'
		| ASIGNACION ';'
		| SENTENCIA_IF
		| SENTENCIA_SWITCH
		| SENTENCIA_WHILE
		| SENTENCIA_DO
		| SENTENCIA_REPEAT
		| SENTENCIA_FOR
		| SENTENCIA_LOOP
		| SENTENCIA_COUNT
		| SENTENCIA_WHILEX
		| TBreak ';'
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
				{$$ = 0;}
			| TArray ':' Id L_DIMENSIONES TOf TIPO
			;
L_ID 
	: L_ID ',' Id
	| Id
	;

L_DIMENSIONES 
			: L_DIMENSIONES DIMENSION
			| DIMENSION;

DIMENSION
		: '[' Num ']'
		| '[' Num '.' '.' Num ']';

VALOR 
		: EXP
		| TCreate '(' Id ')';


SENTENCIA_IF
			: TIf '(' EXP ')' TThen '{' L_SENTENCIA '}' 
				{
					$$ = $3;
					
				}
			| TIf '(' EXP ')' TThen '{' L_SENTENCIA '}' TElse '{' LSENTENCIA '}'
			;

SENTENCIA_SWITCH
				: TSwitch '(' EXP ',' MODO ')' '{' L_CASOS DEFECTO '}'
				| TSwitch '(' EXP ',' MODO ')' '{' L_CASOS '}'
				;

MODO
	: Verdadero
	| Falso
	;

L_CASOS 
		: L_CASOS CASO
		| CASO
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
			| Cadena
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
			$$.IniciarNodo($1, $3, "||", "||", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
	| EXP '&&' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "&&", "&&", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
	| EXP '|?' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "|?", "|?", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
	| EXP '&?' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "&?", "&?", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
	| EXP '|&' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "|&", "|&", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
	| '!' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, $2, "!", "!", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
	| EXP '==' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "==", "==", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
	| EXP '!=' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "!=", "!=", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
	| EXP '>' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, ">", ">", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
	| EXP '>=' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, ">=", ">=", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
	| EXP '<' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "<", "<", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
	| EXP '<=' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "<=", "<=", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
	| EXP '+' EXP
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "+", "+", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
    | EXP '-' EXP
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "-", "-", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
    | EXP '*' EXP
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "*", "*", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
    | EXP '/' EXP
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "/", "/", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
    | EXP '^' EXP
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "^", "^", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
	| EXP '%' EXP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "%", "%", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
    | '-' EXP %prec UMINUS
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, $2, "-", "-", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
    | '(' EXP ')'
        {
			$$ = $2;
		}
    | Num
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "num", "num", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, yytext);
		}
	| OBJETO 
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "obj", "obj", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
		}
	| Cadena 
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "str", "str", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, yytext);
		}
	| Verdadero 
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "bool", "bool", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, true);
		}
	| Falso 
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "bool", "bool", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, false);
		}
	| TNull {
				$$ = new FNodoExpresion();
				$$.IniciarNodo(null, null, "null", "null", yylineno + 1, yy.lexer.yylloc.last_column - yyleng, null);
			}
    ;

	OBJETO
		: Id HIJO
		| Id L_DIMENSIONESA 
		| Id '('L_EXPS')' HIJO
		;

	HIJO
		: Id HIJO
		| Id L_DIMENSIONESA 
		| Id '('L_EXPS')' HIJO
		|
		;

	L_EXPS 
		: L_EXP
		| 
		;

	L_EXP
		: L_EXP ',' EXP
		| EXP
		;