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
        {return $1;}
    ;


L_ELEMENTOS
	: L_ELEMENTOS ELEMENTO
	| ELEMENTO;

ELEMENTO
	: TElement ':' Id '{' L_CUERPO '}';

L_CUERPO 
		: L_CUERPO CUERPO
		| CUERPO;

CUERPO 
		: DECLARACION
		| ELEMENTO;

DECLARACION
			: TIPO L_ID ':' VALOR ';'
				{$$ = 0;}
			| TArray ':' Id L_DIMENSIONES TOf TIPO ';'
			;
L_ID 
	: L_ID ',' Id
	| Id;

L_DIMENSIONES 
			: L_DIMENSIONES DIMENSION
			| DIMENSION;

DIMENSION
		: '[' Num ']'
		| '[' Num '.' '.' Num ']';

VALOR 
		: EXP
		| TNull
		| TCreate '(' Id ')';

TIPO 
	: TNum
	| TStr
	| TBool
	| Id;

EXP
    : EXP '||' EXP
		{$$ = $1+"||"+$3;}
	| EXP '&&' EXP
		{$$ = $1+"&&"+$3;}
	| EXP '|?' EXP
		{$$ = $1+"|?"+$3;}
	| EXP '&?' EXP
		{$$ = $1+"&?"+$3;}
	| EXP '|&' EXP
		{$$ = $1+"|&"+$3;}
	| '!' EXP
		{$$ = "!"+$2;}
	| EXP '==' EXP
		{$$ = $1+"=="+$3;}
	| EXP '!=' EXP
		{$$ = $1+"!="+$3;}
	| EXP '>' EXP
		{$$ = $1+">"+$3;}
	| EXP '>=' EXP
		{$$ = $1+">="+$3;}
	| EXP '<' EXP
		{$$ = $1+"<"+$3;}
	| EXP '<=' EXP
		{$$ = $1+"<="+$3;}
	| EXP '+' EXP
        {$$ = $1+"+"+$3;}
    | EXP '-' EXP
        {$$ = $1+"-"+$3;}
    | EXP '*' EXP
        {$$ = $1+"*"+$3;}
    | EXP '/' EXP
        {$$ = $1+"/"+$3;}
    | EXP '^' EXP
        {$$ = $1+"^"+$3;}
	| EXP '%' EXP
		{$$ = $1+"%"+$3;}
    | '-' EXP %prec UMINUS
        {$$ = "-"+$2;}
    | '(' EXP ')'
        {$$ = $2;}
    | Num
        {$$ = yytext;}
	| Id 
		{$$ = yytext;}
	| Cadena 
		{$$ = yytext;}
	| Verdadero 
		{$$ = "v";}
	| Falso 
		{$$ = "f";}
    ;
