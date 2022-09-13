var carta1 = {
  nome: "Bubasauro",
  atributos: {
    ataque: 10,
    defesa: 8,
    magia: 6
  }
};

var carta2 = {
  nome: "Darth Vader",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};

var carta3 = {
  nome: "Shiryu De Dragão",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }

  cartaJogador = cartas[numeroCartaJogador];

  // console.log(cartaMaquina);
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    // console.log(atributo);
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");

  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];

  // console.log(atributoSelecionado);
  // console.log(cartaJogador.atributos[atributoSelecionado]);

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu!!!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu!!!";
  } else {
    elementoResultado.innerHTML = "Empatou!!!";
  }

  console.log(cartaMaquina);
}
