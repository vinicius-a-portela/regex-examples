/**
 * Get the Tag of a text
 */

//NOTE: EXECUTE THIS WITH NODE.JS (IT'S EASIER)

//The Text, you can edit to whatever you want
const text = 
`
<h1>Um titulo legal para o nosso regex</h1>
Texto e mais texto

<a>um link aqui</a>

<div><div>Uma div dentro de outra div</div></div>
`

//Get Openning and Closing Tag
//const regex = /<[^/]+?>|<\/.+?>/gm;

/* Get just Opening Tag */
//const regex = /<[^/]+?>/gm;

/* Get just Closing Tag */
//const regex = /<\/.+?>/gm;

//console.log(text.match(regex));

/* Get Tag Content */
const regex = /(?:<.*?>)(.*)(?:<\/.*?>)/gm
let res = '';

while(res = regex.exec(text)){
    console.log(res[1]); //Global and Multiline mode
}