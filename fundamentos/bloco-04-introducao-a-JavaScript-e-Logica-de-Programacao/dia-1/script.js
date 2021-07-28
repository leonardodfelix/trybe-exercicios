// Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina);
// Crie uma constante chamada birthCity e atribua a ela a sua cidade natal;
// Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu;
// Utilize o console.log() para imprimir as constantes e variáveis que você criou;
// Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
// Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔

const myName = "Leonardo";
const birthCity = "Santos";
let birthYear = 1983;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;

console.log(birthYear);

birthCity = "Vila Velha"

console.log(birthCity);

// Leonardo
// Santos
// 1983
// 2030
// /home/leonardo/github/trybe-exercicios/fundamentos/bloco-04-introducao-a-JavaScript-e-Logica-de-Programacao/dia-1/script.js:20
// birthCity = "Vila Velha"
//           ^

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (/home/leonardo/github/trybe-exercicios/fundamentos/bloco-04-introducao-a-JavaScript-e-Logica-de-Programacao/dia-1/script.js:20:11)
//     at Module._compile (internal/modules/cjs/loader.js:778:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
//     at Module.load (internal/modules/cjs/loader.js:653:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:585:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
//     at startup (internal/bootstrap/node.js:283:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)