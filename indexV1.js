/*Exercício 1*/

var numero1= prompt('Digite um número:')
var numero2= prompt('Digite mais um número:')

operacao=prompt('Digite a operação que deseja realizar: 1-soma / 2-subtração / 3-multiplicação / 4-divisão:')



function imprimirResultado () {
    console.log ('O resultado é ' + resultado)
}

function soma(){
    resultado= parseInt(numero1)+ parseInt(numero2)
}

function subtracao(){
    resultado= parseInt(numero1) - parseInt(numero2)
}

function multiplicacao(){
    resultado= parseInt(numero1) * parseInt(numero2)
}

function divisao(){
    resultado= parseInt(numero1) / parseInt(numero2)
}

if (operacao==1){
    soma()
    imprimirResultado()
}

if (operacao==2) {
    subtracao()
    imprimirResultado()
}

if (operacao==3) {
    multiplicacao()
    imprimirResultado()
}

if (operacao==4) {
    divisao()
    imprimirResultado()
} 

/* Exercício 2*/

var numero= prompt('Digite um número para definir a tabuada:');
resultado=0
i=1

for (let i=1; i<=10; i++) {
        console.log( numero + ' x ' + i + '=' + (numero*i));
}



/*Exercício 3*/
const telefones = []
contador=1

for (let i=0; i<=4; i++) {
    telefones.push(prompt ('Digite um numero:'));
    console.log('Telefone' + contador + ':' + telefones[i])
    contador=contador+1
}

/*Exercpicio 4*/

const numeroBinario= []

i=0

for (let i=0; i<=3 ; i++) {
    numeroBinario.push(prompt ('Digite um numero:')) 
};

numeroBinario.reverse()

console.log(numeroBinario)

var decimal = 0


for (let i=0; i<=3 ; i++) {
    var elemento= numeroBinario[i];
    var calculo= parseInt(elemento * (2 ** i));
    var decimal= decimal+calculo;

}

console.log(decimal);

