var nome = "Danilo";
var notaDoPrimeiroBimestre = 9.4355;
var notaDoSegundoBimestre = 7.234;
var notaDoTerceiroBimestre = 4.234;
var notaDoQuartoBimestre = 5.183;
var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre)/4;

var notaFixada = notaFinal.toFixed(2);

console.log("Bem vindo " + nome);
console.log(notaFixada);

if(notaFixada > 6.0)
{
  console.log("Aprovado")
}
else
{
  console.log("Reprovado")
}

//isso é um comentário

//Revisão
//variáveis, strings, console.log, toFixed, operações, matemáticas, concatenação