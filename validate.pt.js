/**
 * Validar através do REGEX
 */

//Validar Número de Telefone (9 numeros, com ou sem DDD + 9 na frente)
/*const regex = /(\d{9,11})/;
//const number = '(93)123456789';
//const number = '93123456789';
//const number = '(93) 123456789';
//const number = '(93) 12345-6789';

//Pegar só números
num = number.replace(/[()-\s]/gm, '');

console.log(regex.test(num));*/

//Validar Email
//const regex = /(.*@.*)/; //Basic One
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ //Complex One
// ⮡ Pego em: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript 

//const email = 'teste@gmail.com';
//const email = 'outro@hotmail.com';
const email = 'a.b.c.d.e.f-a_z@gmail.com';

console.log(regex.test(email));