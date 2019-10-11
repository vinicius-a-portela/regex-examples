// Criando e Usando Regex
const regex = new RegExp(/* Regex Expression Here */);

//Exemplo
const regex2 = new RegExp('\\w');

//FLAGS
//Flag g -> Continuar procurando. (global)
//Flag i -> ignore sense case
//Flag m -> (multiple line) Aplicar Âncoras + Multiplas Linhas
//Flag y -> Só traz consecultivos (ok, ok, no, ok -> ok, ok)
//Flag u -> Entender Unicode

//Aplicação de Flags
const regex3 = new RegExp('\\w', 'g');

//Criango Regex com Literais
const regex4 = /\w/g

//! Usar com variáveis é melhor para separar

// regex.exec(text)
// Executa e vai para a próxima ocorrência do regex, pode fazer loop

let result = '';
const target = '22a33b44c'
const pattern = /\d{2}\w/g

while(result = pattern.exec(target)){
    console.log(result)
}

//test = validar texto (Invés de Pegar)
let regex5 = /\w/;
let alvo = 'a';
regex5.test(alvo) // True ou False

//Outras Ações com Regex

//str.replace
const data = '12/07/2017'
data.replace(/\//g,'-');

//Caracteres Coringas
// /d -> digito

//Pegar CEP
// {} -> quantificador, valor dentro = quantas vezes repetir
/\d{5}-\d{3}/.exec();

// [] -> faixa de caracteres
/[012]\d:[0-5]\d/.exec();

// Padrão de Placa
/[A-Z]{3}-\d{4}/.exec();

//META CARACTERES
// . -> curinga
// [..] -> conjunto
// [^..] -> conjunto negado -> Inverso de conjunto

// /d -> digito
// /D -> não digito

// /s -> branco
// /S -> não branco

// /w -> alfanumerico [a-zA-Z0-9_]
// /W -> não alfanumerico

//QUANTIFICADORES
// {n} -> n ocorrências
// {n,m} -> min, max ocorrências
// {n,} -> só min
// {,m} -> só max
// ? -> 0 ou 1, mesmo que {,1}
// + -> 1 ou +, mesmo que {1,}
// * -> 0 ou mais ocorrências

//ANCORAS
//Refere-se a posição e não caracteres
// ^ -> ínicio do texto OU inicio linha (m)
// \A -> início do texto
// $ -> fim do texto OU fim linha (m)
// \Z -> fim texto (EOF)
// \b -> posição de |B|orda, antes de palavra ou depois de palavra -> mesmo que: entre \W e \w
// \B -> posição de não borda

//AGRUPAMENTOS
// (..) -> grupo
// .. | .. -> alternância, escolhe o da esquerda OU da direita
//<<n>> -> texto no N grupo

//GULOSO VS NÃO GULOSO
// .+ -> Pega Todas as Ocorrências
// .+? -> Pega Só a Primeira Ocorrência


// \B e \b -> Se tem algo ou não na frente/atrás
//Exemplos:

//COM \b

/\bs/.exec(); // Pega todos os S sem nada atras

/s\b/.exec(); // Pega todos os S sem na frente

/\bs\b/.exec(); // Sem nada na frente e atrás de S -> pega o S 'isolado'

//COM \B

/\Bs/g.exec(); // Pega todos os S com algo atras

/s\B/.exec(); // Pega todos os S com algo na frente

/\Bs\B/.exec(); // Pega o S com algo na frente e atrás -> pega o S 'cercado'