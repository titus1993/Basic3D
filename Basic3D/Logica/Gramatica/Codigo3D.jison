/* lexical grammar */


%lex
%%
///<reference path="../Ejecucion/Funciones.js" />
[\r\n\s]+       {}            /* skip whitespace */
"/*"[^?]*"*/"	{console.log(yytext);}
"//"[^\n]*		{console.log(yytext);}

"void"			{return 'TVoid';}
"H"		{return 'TH';}
"S"		{return 'TS';}
"P"			{return 'TP';}
"Heap"			{return 'THeap';}
"Pool"			{return 'TPool';}
"Stack"		{return 'TStack';}

"$$_SGC"		{return 'TAmbito';}
"goto"		{return 'TGoto';}

"main"		{return 'TMain';}
"if"		{return 'TIf';}


":"				{return ':';}
";"				{return ';';}
"["				{return '[';}
"]"				{return ']';}
"{"				{return '{';}
"}"				{return '}';}

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
"$$_getBool"		{return 'TgetBool';}
"$$_getNum"		{return 'TgetNum';}
"$$_outStr"		{return 'ToutStr';}
"$$_outNum"		{return 'ToutNum';}
"$$_inStr"			{return 'TinStr';}
"$$_inNum"			{return 'TinNum';}
"$$_show"			{return 'TShow';}
"$$_getRandom"		{return 'TgetRandom';}
"$$_getArrLengh"		{return 'TgetArrLength';}
"$$_getStrLengh"		{return 'TgetStrLength';}
"$$_SGB"		{return 'Tsgb';}
"Exit"		{return 'TExit';}
"printf"		{return 'Tprintf';}

[0-9]+("."[0-9]+)?  {console.log("numero: "+ yytext);return 'Num';}
"t"[0-9]+ {console.log("id: "+yytext);return 'Temp';}
"L"[0-9]+ {console.log("id: "+yytext);return 'Etq';}
[A-Za-z][_0-9A-Za-z]* {console.log("id: "+yytext);return 'Id';}

<<EOF>>               {console.log("eof");return 'EOF';}
.                     {console.log("error lexico");return 'INVALID';}



/lex

/* operator associations and precedence */

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
			Tabla3D = $1;
		}
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
	: TVoid TMain '(' ')' '{' L_SENTENCIA '}'
		{
			var metodo = new Metodo("void", "main", @1.first_line, @1.first_column + 1, new Array(), null);
			var simbolo = new Simbolo ("void", "main", "metodo", -1, 0, @1.first_line, @1.first_column + 1, $6, metodo);
			metodo.Simbolo = simbolo;
			for(var i = 0; i < $6.length; i++){
				$6[i].Padre = simbolo;
			}
			for(var i = 0; i < $6.length-1; i++){	
				$6[i].Siguiente = $6[i+1];
			}
			$$ = new Array();
			$$.push(simbolo);
		}
	| TVoid Id '(' ')' '{' L_SENTENCIA '}'
		{
			var metodo = new Metodo("void", "main", @1.first_line, @1.first_column + 1, new Array(), null);
			var simbolo = new Simbolo ("void", "main", "metodo", -1, 0, @1.first_line, @1.first_column + 1, $6, metodo);
			metodo.Simbolo = simbolo;
			for(var i = 0; i < $6.length; i++){
				$6[i].Padre = simbolo;
			}
			for(var i = 0; i < $6.length-1; i++){	
				$6[i].Siguiente = $6[i+1];				
			}
			$$ = new Array();
			$$.push(simbolo);
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
		: Etq ':' 
			{ 
				var simbolo = new Simbolo ("etq", "etq", "etq", -1, 0, @1.first_line, @1.first_column + 1, null, $1);
				$$ = new Array();
				$$.push(simbolo);  
			}
		| Temp '=' EXP ';'
			{	
				var nodo = new FNodoExpresion();
				nodo.IniciarNodo(null, null, "temp", $1, @1.first_line, @1.first_column + 1, null);
				var asigna = new Asignacion(nodo, $3, null);
				var simbolo = new Simbolo ("asignacion", $1, "asignacion", -1, 0, @1.first_line, @1.first_column + 1, null, asigna);
				asigna.Simbolo = simbolo;
				$$ = new Array();
				$$.push(simbolo); 
			}
		| TS '=' EXP ';'
			{	
				var nodo = new FNodoExpresion();
				nodo.IniciarNodo(null, null, "s", $1, @1.first_line, @1.first_column + 1, null);
				var asigna = new Asignacion(nodo, $3, null);
				var simbolo = new Simbolo ("asignacion", $1, "asignacion", -1, 0, @1.first_line, @1.first_column + 1, null, asigna);
				asigna.Simbolo = simbolo;
				$$ = new Array();
				$$.push(simbolo); 
			}
		| TH '=' EXP ';'
			{	
				var nodo = new FNodoExpresion();
				nodo.IniciarNodo(null, null, "h", $1, @1.first_line, @1.first_column + 1, null);
				var asigna = new Asignacion(nodo, $3, null);
				var simbolo = new Simbolo ("asignacion", $1, "asignacion", -1, 0, @1.first_line, @1.first_column + 1, null, asigna);
				asigna.Simbolo = simbolo;
				$$ = new Array();
				$$.push(simbolo); 
			}
		| TP '=' EXP ';'
			{	
				var nodo = new FNodoExpresion();
				nodo.IniciarNodo(null, null, "p", $1, @1.first_line, @1.first_column + 1, null);
				var asigna = new Asignacion(nodo, $3, null);
				var simbolo = new Simbolo ("asignacion", $1, "asignacion", -1, 0, @1.first_line, @1.first_column + 1, null, asigna);
				asigna.Simbolo = simbolo;
				$$ = new Array();
				$$.push(simbolo); 
			}
		| HEAP '=' EXP ';'
			{	
				var asigna = new Asignacion($1, $3, null);
				var simbolo = new Simbolo ("asignacion", "asignacion", "asignacion", -1, 0, @1.first_line, @1.first_column + 1, null, asigna);
				asigna.Simbolo = simbolo;
				$$ = new Array();
				$$.push(simbolo); 
			}
		| POOL '=' EXP ';'
			{	
				var asigna = new Asignacion($1, $3, null);
				var simbolo = new Simbolo ("asignacion", "asignacion", "asignacion", -1, 0, @1.first_line, @1.first_column + 1, null, asigna);
				asigna.Simbolo = simbolo;
				$$ = new Array();
				$$.push(simbolo); 
			}
		| STACK '=' EXP ';'
			{	
				var asigna = new Asignacion($1, $3, null);
				var simbolo = new Simbolo ("asignacion", "asignacion", "asignacion", -1, 0, @1.first_line, @1.first_column + 1, null, asigna);
				asigna.Simbolo = simbolo;
				$$ = new Array();
				$$.push(simbolo); 
			}
		| TGoto Etq ';'
			{ 
				var simbolo = new Simbolo ("goto", "goto", "goto", -1, 0, @1.first_line, @1.first_column + 1, null, $2);
				$$ = new Array();
				$$.push(simbolo); 
			}
		| TIf '(' RELACIONAL ')' TGoto Etq ';'
			{ 
				var si = new If($3, $6, null);
				var simbolo = new Simbolo ("if", "if", "if", -1, 0, @1.first_line, @1.first_column + 1, null, si);
				si.Simbolo = simbolo;
				$$ = new Array();
				$$.push(simbolo); 
			}
		| TExit '(' Num ')' ';'
			{ 
				var simbolo = new Simbolo ("exit", "exit", "exit", -1, 0, @1.first_line, @1.first_column + 1, null, $3);
				$$ = new Array();
				$$.push(simbolo); 
			}
		| FUNCIONES_PRIMITIVAS ';'
			{ 
				$$ = new Array();
				$$.push($1); 
			}
		;

FUNCIONES_PRIMITIVAS
						: ToutStr '(' ')' { var simbolo = new Simbolo ("getArrLength", "getArrLength", "getArrLength", -1, 0, @1.first_line, @1.first_column + 1, $3, rep); }
						| ToutNum '(' ')' { var simbolo = new Simbolo ("getArrLength", "getArrLength", "getArrLength", -1, 0, @1.first_line, @1.first_column + 1, $3, rep); }
						| TinStr '(' ')' { var simbolo = new Simbolo ("getArrLength", "getArrLength", "getArrLength", -1, 0, @1.first_line, @1.first_column + 1, $3, rep); }
						| TShow '(' ')' { var simbolo = new Simbolo ("getArrLength", "getArrLength", "getArrLength", -1, 0, @1.first_line, @1.first_column + 1, $3, rep); }
						| TgetBool '(' ')' { var simbolo = new Simbolo ("getArrLength", "getArrLength", "getArrLength", -1, 0, @1.first_line, @1.first_column + 1, $3, rep); }
						| TgetNum '(' ')' { var simbolo = new Simbolo ("getArrLength", "getArrLength", "getArrLength", -1, 0, @1.first_line, @1.first_column + 1, $3, rep); }
						| TinNum '(' ')' { var simbolo = new Simbolo ("getArrLength", "getArrLength", "getArrLength", -1, 0, @1.first_line, @1.first_column + 1, $3, rep); }
						| TgetRandom '(' ')' { var simbolo = new Simbolo ("getArrLength", "getArrLength", "getArrLength", -1, 0, @1.first_line, @1.first_column + 1, $3, rep); }
						| TgetStrLength '(' ')' { var simbolo = new Simbolo ("getArrLength", "getArrLength", "getArrLength", -1, 0, @1.first_line, @1.first_column + 1, $3, rep); }
						| TgetArrLength '(' ')' { var simbolo = new Simbolo ("getArrLength", "getArrLength", "getArrLength", -1, 0, @1.first_line, @1.first_column + 1, $3, rep); }
						| TAmbito '(' ')' { var simbolo = new Simbolo ("getArrLength", "getArrLength", "getArrLength", -1, 0, @1.first_line, @1.first_column + 1, $3, rep); }
						| Tsbg '(' Num ',' Num')' { var simbolo = new Simbolo ("sgb", "sgb", "sgb", -1, 0, @1.first_line, @1.first_column + 1, $3, $5); }
						;

RELACIONAL
		: VAL '==' VAL
			{
				$$ = new FNodoExpresion();
				$$.IniciarNodo($1, $3, "==", "==", @2.first_line, @2.first_column + 1, null);
			}
		| VAL '!=' VAL
			{
				$$ = new FNodoExpresion();
				$$.IniciarNodo($1, $3, "!=", "!=", @2.first_line, @2.first_column + 1, null);
			}
		| VAL '>' VAL
			{
				$$ = new FNodoExpresion();
				$$.IniciarNodo($1, $3, ">", ">", @2.first_line, @2.first_column + 1, null);
			}
		| VAL '>=' VAL
			{
				$$ = new FNodoExpresion();
				$$.IniciarNodo($1, $3, ">=", ">=", @2.first_line, @2.first_column + 1, null);
			}
		| VAL '<' VAL
			{
				$$ = new FNodoExpresion();
				$$.IniciarNodo($1, $3, "<", "<", @2.first_line, @2.first_column + 1, null);
			}
		| VAL '<=' VAL
			{
				$$ = new FNodoExpresion();
				$$.IniciarNodo($1, $3, "<=", "<=", @2.first_line, @2.first_column + 1, null);
			}
		;

VAL
	: Num
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "num", "num", @1.first_line, @1.first_column + 1, yytext);
		}
	| Temp
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "temp", $1, @1.first_line, @1.first_column + 1, yytext);
		}
	;

EXP
    : UNARIOS '+' UNARIOS
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "+", "+", @2.first_line, @2.first_column + 1, null);
		}
    | UNARIOS '-' UNARIOS
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "-", "-", @2.first_line, @2.first_column + 1, null);
		}
    | UNARIOS '*' UNARIOS
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "*", "*", @2.first_line, @2.first_column + 1, null);
		}
    | UNARIOS '/' UNARIOS
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "/", "/", @2.first_line, @2.first_column + 1, null);
		}
    | UNARIOS '^' UNARIOS
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "^", "^", @2.first_line, @2.first_column + 1, null);
		}
	| UNARIOS '%' UNARIOS
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo($1, $3, "%", "%", @2.first_line, @2.first_column + 1, null);
		}	
	| '-' EXP %prec UMINUS
        {
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, $2, "-", "-", @1.first_line, @1.first_column + 1, null);
		}
	| HEAP
		{
			$$ = $1;
		}
	| STACK
	{
			$$ = $1;
		}
	| POOL
	{
			$$ = $1;
		}
	| UNARIOS
	{
			$$ = $1;
	}
    ;

UNARIOS
	: TS
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "s", "s", @1.first_line, @1.first_column + 1, yytext);
		}
	| TH
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "h", "h", @1.first_line, @1.first_column + 1, yytext);
		}
	| TP
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "p", "p", @1.first_line, @1.first_column + 1, yytext);
		}
	| VAL
		{
			$$ = $1;
		}
	;

HEAP
	: THeap '[' UNARIOS ']' 	
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "heap", "heap", @1.first_line, @1.first_column + 1, $3);
		}
	;

POOL
	: TPool '[' UNARIOS ']' 
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "pool", "pool", @1.first_line, @1.first_column + 1, $3);
		}
	;

STACK
	: TStack '[' UNARIOS ']' 
		{
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "stack", "stack", @1.first_line, @1.first_column + 1, $3);
		}
	;

	