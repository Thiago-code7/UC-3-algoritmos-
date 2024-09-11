// Q-1

// let frutas = ['maçã', 'banana', 'laranja'];
// frutas.shift('maçã')
// console.log(frutas) saida = ['banana', 'laranja']
// saida => ['banana', 'laranja']

// let frutas = ['maçã', 'banana', 'laranja'];
// frutas.push('uva')
// console.log(frutas) saida = ['macã', 'banana', 'laranja', 'uva']
// saida => ['macã', 'banana', 'laranja', 'uva']

// const frutas = ['banana', 'mamão', 'goiaba', 'maracujá', 'acerola', 'jaca']

// function verificarFruta() {

// if (frutas.includes('maracujá'.toLowerCase())) {
// return 'fruta encontrada';
// } else {
// return 'fruta não encontrada'
// }
// }
// console.log(verificarFruta('maracujá'));// Q-1

// let frutas = ['maçã', 'banana', 'laranja'];
// frutas.shift('maçã')
// console.log(frutas) saida = ['banana', 'laranja']

// saida => ['banana', 'laranja']

// let frutas = ['maçã', 'banana', 'laranja'];
// frutas.push('uva')
// console.log(frutas) saida = ['macã', 'banana', 'laranja', 'uva']
// saida => ['macã', 'banana', 'laranja', 'uva']

// const frutas = ['banana', 'mamão', 'goiaba', 'maracujá', 'acerola', 'jaca']

// function verificarFruta() {

// if (frutas.includes('banana'.toLowerCase())) {
// return 'fruta encontrada';
// } else {
// return 'fruta não encontrada'
// }
// }
// console.log(verificarFruta('banana'));// Q-1
// saida => fruta encontrada

// Q-2
// function calcular(a, b, operacao) {
// if(operacao === 'soma') {
// return a + b;
// } else if(operacao === 'divisao') {
// return a / b;
// } else {

// return "operação invalida. Use 'soma' ou 'divisão'.";
// }
// }
// let resultado1 = calcular(5, 5, 'soma');
// let resultado2 = calcular(8, 4, 'divisao');

// console.log(resultado1); saida => 10
// console.log(resultado2); saida => 2

// Q-3
// let numeros = [1, 2, 3, 4, 5];

// for (let i = 0; i < numeros.length; i++) {
// numeros[i] += 5;
// }
// console.log(numeros); saida => [6, 7, 8, 9, 10]

// let numerosAumentados = [6, 7, 8, 9, 10]

// Q-4
// function classificarNota(nota) {
// switch (true) {
// case (nota >= 7 && nota <= 10):
// return "aprovado";
// case (nota >= 0 && nota < 7):
// return "reprovado";
// default:

// return "Nota inválida. A nota deve estar entre 0 e 10.";
// }
// }
// console.log(classificarNota(8)) => aprovado
// console.log(classificarNota(5)) => reprovado

// Q-5
// let numeros = [5, 10, 15, 20];

// function verificarNumero(numero) {
// if (numero < 10) {
// return "menor que 10";
// } else if (numero >= 10 && numero <= 20) {
// return "entre 10 e 20";
// } else {
// return "maior que 20";
// }
// }

// for (let i = 0; i < numeros.length; i++) {
// let resultado = verificarNumero(numeros[i]);
// console.log(`O número ${numeros[i]} é ${resultado}.`);
// }
// saida => O número 5 é menor que 10.
// O número 10 é entre 10 e 20.
// O número 15 é entre 10 e 20.
// O número 20 é entre 10 e 20.

// Q-6

// let idade = 42; saida => adulto
// if (idade >= 18 && idade < 65) {
// console.log("adulto");
// } else {
// console.log("não adulto");
// }

// let idade = 42
// let resultado = idade >= 18 ? "maior que 18" : "menor ou igual a 65";
// console.log(resultado); => maior que 18

// Q-7

// function fizzBuzz(n) {

// let result = [];

// for (let i = 1; i <= n; i++) {

// if (i % 3 === 0 && i % 5 === 0) {
// result.push("FizzBuzz");
// }

// else if (i % 3 === 0) {
// result.push("Fizz");

// }

// else if (i % 5 === 0) {
// result.push("Buzz");
// }

// else {
// result.push(i);
// }
// }

// return result;
// }

// console.log(fizzBuzz(15));

// saida=> [
// 1, 2,
// 'Fizz', 4,
// 'Buzz', 'Fizz',
// 7, 8,
// 'Fizz', 'Buzz',
// 11, 'Fizz',
// 13, 14,
// 'FizzBuzz'
// ] // Q-8

// let tarefas = ["estudar", "limpar", "comprar"];
// tarefas.splice(2,3,"exercitar")
// console.log(tarefas);

// Q-9
// let média = (7,9);

// function verificarNota(nota1,nota2) {
// return (nota1 + nota2) / 2;
// }
// console.log(verificarNota(7,9)); saida => 8
// Q-10
// let valores = [5, 10, 15, 20];

// let valoresDivididos = []

// let i = 0

// while (i < valores.length) {
// valoresDivididos.push(valores[i] / 2);
// i++;
// }
// console.log(valoresDivididos);
// saida => [ 2.5, 5, 7.5, 10 ] // Q11

// let num1 = parseInt(prompt("Escolha o primeiro número"));
// let num2 = parseInt(prompt("Escolha o segundo número"));

// function compararSoma() {5
//     let soma = num1 + num2;
//     if (soma > 20) {
//         alert("A soma é maior que 20");80
//     }else{
//         alert("A soma é menor que 20");
//     }80
// }

// console.log(compararSoma());

// Q12

// let numArr = parseInt(prompt("Digite o tamanho do array"));
// let numbers = [];
// let numbersCompleto;
// let msg;
// let j = 0;

// for (let i = 1; i <= numArr; i++) {
//     numbersCompleto = numbers.push(i);
//     if(numbersCompleto % 3 == 0){
//         msg = 'é multiplo'
//     }else{
//         msg = 'Não é multiplo'
//     }

//     alert(${numbersCompleto}, ${msg})
// }

// Q13

// let numArr = parseInt(prompt("Digite o tamanho do array"));
// let numbers = [];
// let numbersCompleto;
// let quadrado;

// for (let i = 1; i <= numArr; i++) {
//     numbersCompleto = numbers.push(i);
//     quadrado = numbersCompleto * numbersCompleto;

//     alert(${numbersCompleto} o quadrado é: ${quadrado})
// }

// Q14

// function verifiValor() {
//     let valor = parseInt(prompt("Digite um número"));
//     if (valor > 0) {
//         alert(${valor} é positivo);
//     }else if(valor < 0){
//         alert(${valor} é negativo);
//     }else{
//         alert("zero");
//     }
// }

// verifiValor();

// Q15

// let numArr = parseInt(prompt("Digite o tamanho do array"));
// let numbers = [];
// let numbersCompleto;
// let msg;

// for (let i = 1; i <= numArr; i++) {
//     numbersCompleto = numbers.push(i);
//     if(numbersCompleto % 2 == 0){
//         msg = 'é par'
//     }else{
//         msg = 'é impar'
//     }

//     alert(${numbersCompleto}, ${msg})
// }

// Q16

// function operacaoMatematica() {
//     let num1 = parseInt(prompt("Digite o primeiro numero"));
//     let num2 = parseInt(prompt("Digite o segundo numero"));
//     let operacao = prompt("Digite a operacao");
//     let calc;

//     if(operacao == "soma"){
//          calc = num1 + num2;
//     }else if(operacao == "subtracao"){
//         calc = num1 - num2;
//     }else if(operacao == "multiplicacao"){
//         calc = num1 * num2;
//     }else if(operacao == "divisao"){
//         calc = num1 / num2;
//     }
//     alert(calc)
// }

// // operacaoMatematica();

// // Q17

// function verificarParidade(){
//     let msg;
//     let num = parseInt(prompt("Digite um numero"));
//     if (num % 2 == 0) {
//         msg = "É par";
//     }else{
//         msg = "É impar";
//     }

//     alert(`${num} ${msg}`)
// }

// // verificarParidade();

// // Q18

// let numArr = parseInt(prompt("Digite o tamanho do array"));
// let numbers = [];
// let numbersCompleto;
// let msg;

// for (let i = 1; i <= numArr; i++) {
//     numbersCompleto = numbers.push(i);
//     if(numbersCompleto > 10){
//         msg = 'é maior que 10'
//     }else if(numbersCompleto < 10){
//         msg = 'é menor que 10'
//     }else{
//         msg = 'é 10'
//     }
//      alert(`${numbersCompleto}, ${msg}`)
// }


