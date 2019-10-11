/**
 * Manipular Tags com REGEX
 */

//NOTA: Execute com NodeJS se tiver (É mais fácil)

//O texto, você editar para o que você quiser
const text = 
`
<h1>Um titulo legal para o nosso regex</h1>
Texto e mais texto

<a href='www.google.com'>um link aqui</a>

<div><div>Uma div dentro de outra div</div></div>
`

/* Abertura e Fechadura de Tag */
//const regex = /<[^/]+?>|<\/.+?>/gm;

/* Só Tag de Abertura */
//const regex = /<[^/]+?>/gm;

/* Só Tag de Fechadura */
//const regex = /<\/.+?>/gm;

//console.log(text.match(regex));

/* Pegar Conteudo de Tag */
/*const regex = /(?:<.*?>)(.*)(?:<\/.*?>)/gm //Modo Global e Multilinha
let res = '';

while(res = regex.exec(text)){
    console.log(res[1]); 
}*/

/* Propriedades da Tag */

//Pegar Propriedades de uma Tag
const tag = "<a target='_blank' href='www.google.com'>um link aqui</a>";
const regex = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/gm;
let res = '';
let properties = {};

//Procurar por Propriedades
while(res = regex.exec(tag)){
    properties[res[1]] = res[2];
}

console.log(properties);