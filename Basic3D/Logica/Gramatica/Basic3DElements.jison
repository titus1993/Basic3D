/* lexical grammar */
%lex
%%

[\r\n\s]+       {}            /* skip whitespace */
"%%"[^\n]*		{console.log(yytext);}
"¿¿"[^?]*"??"	{console.log(yytext);}


"element"		{return 'TElement';}
"bool"			{return 'TBool';}
"num"			{return 'TNum';}
"str"			{return 'TStr';}
"array"			{return 'TArray';}

"of"			{return 'TOf';}
"NULL"			{return 'TNull';}
"create"		{return 'TCreate';}
"getBool"		{return 'TgetBool';}
"getNum"		{return 'TgetNum';}
"inNum"			{return 'TinNum';}
"getRandom"		{return 'TgetRandom';}
"getLength"		{return 'TgetLength';}


","				{return ',';}
"."				{return '.';}
":"				{return ':';}
";"				{return ';';}
"["				{return '[';}
"]"				{return ']';}
"{"				{return '{';}
"}"				{return '}';}
"="				{return '=';}


"||"			{return '||';}
"|?"			{return '|?';}
"&&"			{return '&&';}
"&?"			{return '&?';}
"|&"			{return '|&';}
"!"				{return '!';}
"=="			{return '==';}
"!="			{return '!=';}
">"				{return '>';}
"<"				{return '<';}
">="			{return '>=';}
"<="			{return '<=';}
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
    : L_ELEMENTOS EOF
        {					
			for(var i = 0; i < $1.length; i++){
				TablaSimbolos.push($1[i]);
			}
			$$ = $1;
		}
		| EOF {}
    ;


L_ELEMENTOS
	: L_ELEMENTOS ELEMENTO
		{					
			for(var i = 0; i < $2.length; i++){
				$1.push($2[i]);
			}
			$$ = $1;
		}
	| ELEMENTO
		{
			$$ = new Array();
			$$.push($1); 
		}
	;

ELEMENTO
	: TElement ':' Id '{' L_CUERPO '}'
		{
			var e = new Element($3, $5, null);
			var simbolo = new Simbolo ("element", $3, "element", -1, 0, @1.first_line, @1.first_column + 1, $5, e);
			e.Simbolo = simbolo;

			for(var i =0; i < $5.length; i++){
				$5[i].Padre = simbolo;
				if($5[i].Rol == "declaracion"){
					simbolo.Size++;
				}else{
					if(simbolo.Rol != "element"){
						simbolo.Size = simbolo.Size + $5[i].Size;	
					}											
				}
			}	
			for(var i =0; i < $5.length; i++){
				$5[i].setPos(position);
			}
			position = 0;
			$$ = simbolo;			
		}
	;

L_CUERPO 
		: L_CUERPO CUERPO
			{					
				for(var i = 0; i < $2.length; i++){
					$1.push($2[i]);
				}
				$$ = $1;
			}
		| CUERPO
			{
				$$ = $1;
			}
		;

CUERPO 
		: DECLARACION ';' 
			{ 
				$$ = $1; 
			}
		| ELEMENTO
			{ 
				$$ = new Array();
				$$.push($1); 
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
		| '[' Num '.' '.' Num ']';

VALOR 
		: EXP { $$ = $1; }
		| TCreate '(' Id ')'
			{
				$$ = new FNodoExpresion();
				$$.IniciarNodo(null, null, "create", $3, @1.first_line, @1.first_column + 1, null);
			}
		;

TIPO 
	: TNum { $$ = yytext; }
	| TStr { $$ = yytext; }
	| TBool { $$ = yytext; }
	| Id { $$ = yytext; }
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
			var ob = new Objeto("variable", $1, @1.first_line, @1.first_column + 1, null, $2, null);
			$1.InsertarHijo(ob);
			$$ = new FNodoExpresion();
			$$.IniciarNodo(null, null, "obj", "obj", @1.first_line, @1.first_column + 1, $1);
			
		}
	| Id
		{
			var ob = new Objeto("variable", $1, @1.first_line, @1.first_column + 1, null, $2, null);
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
