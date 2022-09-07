var numeroSecreto = parseInt(Math.random() * 11);
var elementoResultado = document.getElementById("resultado");
var tentativas = 3;
var acertou = false;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  if (tentativas > 0) {
    tentativas--;
    if (chute == numeroSecreto) {
      acertou = true;
      elementoResultado.innerHTML = "Acertou";
    } else if (chute < 0 || chute > 10) {
      elementoResultado.innerHTML = "Você deve digitar um numero de 0 a 10";
    } else {
      if (chute > numeroSecreto) {
        elementoResultado.innerHTML =
          "Errou. O numero secreto é menor que " +
          chute +
          ". Restam " +
          tentativas +
          " tentativas!";
      } else {
        elementoResultado.innerHTML =
          "Errou. O numero secreto é maior que " +
          chute +
          ". Restam " +
          tentativas +
          " tentativas!";
      }
    }
  } else {
    elementoResultado.innerHTML =
      "Errou. O numero secreto era " + numeroSecreto;
  }
}
