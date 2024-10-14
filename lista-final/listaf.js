// questão-01
// let frutas = ["Maçã", "Banana", "Laranja"]
// frutas.push("Manga");
// console.log(frutas);
// frutas.unshift("Uva");
// console.log(frutas);
// frutas.splice(3, 1);
// console.log(frutas);
// saida=> [ 'Maçã', 'Banana', 'Laranja', 'Manga' ]
// [ 'Uva', 'Maçã', 'Banana', 'Laranja', 'Manga' ]
// [ 'Uva', 'Maçã', 'Banana', 'Manga' ]
// questão-02
// let saudacao = "Olá";
// let nome = "Maria";
// let mensagem = ${saudacao}, ${nome}!;
// console.log(mensagem);
// saida=> Olá, Maria!
// questão-03
// let numero = 10;
// if (numero % 2 === 0) {
// console.log("Par");
// } else {
// console.log("Ímpar");
// }
// saida=> Par
// questão-04
// let numeros = [5, 12, 8, 130, 44]
// let numerosFiltrados = numeros.filter(function(numero) {
// return numero > 10; 
// });
// console.log(numerosFiltrados);
// saida=> [ 12, 130, 44 ]
// questão-05
// let valores = [10, 20, 30, 40]
// let soma = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
// console.log(soma);
saida=> 100
// questão-06
// let texto = "javascript é legal"
// let textoMaiusculo = texto.toUpperCase();
// console.log(textoMaiusculo);
// saida=>> JAVASCRIPT É LEGAL
// questão-07
// let nome = "Carlos"
// let contemLetraA = nome.includes("a");
// console.log(contemLetraA);
// saida=> true
//questão-08
// let cores = ["Azul", "Verde", "Amarelo", "Roxo"]
// let removerCor = cores.splice(1, 2);
// console.log(cores);
// saida=> [ 'Azul', 'Roxo' ]
//questão-09
// let numeros = [10, 20, 30]
// let adicionarNumero = numeros.unshift(5);
// console.log(numeros);
// let adicionarNumeroFinal = numeros.push(40);
// console.log(numeros);
// let removerNumeros = numeros.slice(1, 4);
// console.log(removerNumeros);
// saida=> [ 5, 10, 20, 30 ]
// [ 5, 10, 20, 30, 40 ]
// [ 10, 20, 30 ]
// questão-10
// let frase = "Programação é divertida"
// let contarCaracteres = frase.length;
// console.log(contarCaracteres);
// saida=> 23
// questão-11
// let frase = "Aprender JavaScript é muito bom"
// let separarPalavras = frase.split(" ");
// console.log(separarPalavras);
// saida=> [ 'Aprender', 'JavaScript', 'é', 'muito', 'bom' ]
// questão-12
// let texto = "Eu gosto de JavaScript"
// let textoInvertido = texto.split('').reverse().join('');
// console.log(textoInvertido);
// saida=> tpircSavaJ ed otsog uE
// questão-13
// let numeros = [1, 2, 3, 4, 5];
// let numerosDobrados = numeros.map(numero => numero * 2);
// console.log(numerosDobrados);
// saida=> [ 2, 4, 6, 8, 10 ]
// questão-14
// let numerosAleatorios = Array.from({ length: 10 }, () => Math.floor(Math.random() * 
100) + 1);
// console.log(numerosAleatorios);
// let maioresQue50 = numerosAleatorios.filter(numero => numero > 50);
// console.log(maioresQue50);
// saida=> [
// 1, 66, 46, 37, 16,
// 44, 74, 49, 41, 99
// ]
// [ 66, 74, 99 ]
// questão-15
// let numerosAleatorios = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) 
+ 1);
// let soma = numerosAleatorios.reduce((acumulador, numeroAtual) => acumulador + 
numeroAtual, 0);
// let resultadoValido = !isNaN(soma);
// console.log("Array de Números Aleatórios:", numerosAleatorios);
// console.log("Soma dos Números:", soma);
// console.log("É um número?", resultadoValido);
// saida=> Array de Números Aleatórios: [ 67, 56, 60, 63, 5 ]
// Soma dos Números: 251
// É um número? true
//questão-16
// let frase = "O clima está ensolarado"
// let novaFrase = frase.replace("ensolarado", "chuvoso");
// console.log(novaFrase);
// saida=> O clima está chuvoso
// questão-17
// let numeros = [40, 10, 30, 20, 50];
// let ordemCrescente = numeros.sort((a, b) => a - b);
// console.log(ordemCrescente);
// saida=> [ 10, 20, 30, 40, 50 ]
// questão-18
// let notas = [7.5, 8.0, 6.5, 9.0, 7.0];
// let somaNotas = notas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 
0);
// let media = somaNotas / notas.length;
// let resultado = media >= 7 ? "Aprovado" : "Reprovado";
// console.log("Média:", media.toFixed(2)); 
// console.log("Resultado:", resultado);
// saida=> Média: 7.60
// Resultado: Aprovado
// questão-19
// let numeroStr = "45.67";
// let numero = parseFloat(numeroStr);
// console.log(numero);
// let arredondadoParaBaixo = Math.floor(numero);
// console.log(arredondadoParaBaixo);
// let arredondadoParaCima = Math.ceil(numero);
// console.log(arredondadoParaCima);
// saida=> 45.67
// 45
// 46
//questão-20
// let palavra = "programador";
// let letra = "a";
// let quantidade = palavra.split(letra).length - 1;
// console.log(quantidade);
// saida=> 2
//questão-21
// let str1 = "casa";
// let str2 = "CASA";
// let str1Minuscula = str1.toLowerCase();
// let str2Minuscula = str2.toLowerCase();
// let saoIguais = str1Minuscula === str2Minuscula;
// console.log(saoIguais);
// saida=> true
//questão-22
// let numeros = [15, 20, 25, 30];
// let MaioresQueDez = numeros.every(numero => numero > 10);
// console.log(MaioresQueDez);
// saida=> true
// questão-23
// let numeros = [5, 8, 12, 3];
// let algumMenorQueCinco = numeros.some(numero => numero < 5);
// console.log(algumMenorQueCinco);
// saida=> true
// questão-24
// let frase = " JavaScript é divertido! ";
// let fraseSemEspacos = frase.trim();
// console.log(fraseSemEspacos);
// saida=> JavaScript é divertido!
// questão-25
// let numero = 7;
// if (numero > 10) {
// console.log("Maior que 10");
// } else {
// console.log("Menor ou igual a 10");
// }
// saida=> Menor ou igual a 10