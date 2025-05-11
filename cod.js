alert("Bem-vindo(a) ao começo do seu futuro!");

// Variáveis
let primeiroNome = prompt ("Como você se chama?");
let idade = prompt (`Quantos anos você tem ${primeiroNome}?`)
// Combinações
let primeiraCombinacao = parseInt(Math.random() * 60 + 1);
let segundaCombinacao = parseInt(Math.random() * 60 + 1);
let terceiraCombinacao = parseInt(Math.random() * 60 + 1);
let quartaCombinacao = parseInt(Math.random() * 60 + 1);
let quintaCombinacao = parseInt(Math.random() * 60 + 1);
let sextaCombinacao = parseInt(Math.random() * 60 + 1);
//Combinação Geral
let numeroCompleto = (`${primeiraCombinacao} ${segundaCombinacao} ${terceiraCombinacao} ${quartaCombinacao} ${quintaCombinacao} ${sextaCombinacao}`);
// Regsitro no Console
console.log(numeroCompleto);
//Interação com o usuario
alert ("Excelente, agora vamos fazer só algumas perguntas para chegarmos no numero que vai mudar a sua vida!")
prompt ("O que pretende em fazer com o dinheiro?")
alert (`Na pratica a maioria das pessoas gastam tudo a toa, espero que você faça o que esta falando, viu ${primeiroNome}.`);
alert ("Já separei seu numero de sorte! Vamos La..");
alert (`Pode anotar aí, seus numeros são: \n${numeroCompleto}`);