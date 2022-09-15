var carta1 = {
  nome: "Bubasauro",
  imagem:
    "https://lojalimitededition.vteximg.com.br/arquivos/ids/322660-650-650/image-8ca5321a8c5142cc9f77d76200892d3a.jpg",
  atributos: {
    ataque: 10,
    defesa: 8,
    magia: 6
  }
};

var carta2 = {
  nome: "Darth Vader",
  imagem:
    "https://ironstudios.vteximg.com.br/arquivos/ids/314491-1000-1000/257014_0.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};

var carta3 = {
  nome: "Shiryu De Dragão",
  imagem: "https://s.aficionados.com.br/imagens/artigo-shiryu-de-dragao_f.jpg",
  atributos: {
    ataque: 9,
    defesa: 6,
    magia: 10
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

  //console.log(cartaMaquina);
  //console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  //exibirOpcoes();
  exibirCartaJogador();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")";

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    // console.log(atributo);
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")";

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    // console.log(atributo);
    opcoesTexto +=
      "<p>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
  var nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
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
  var divResultado = document.getElementById("resultado");
  var elementoResultado = "";

  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];

  // console.log(atributoSelecionado);
  // console.log(cartaJogador.atributos[atributoSelecionado]);

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado = "<p class='resultado-final'>Venceu!!!</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado = "<p class='resultado-final'>Perdeu!!!</p>";
  } else {
    elementoResultado = "<p class='resultado-final'>Empatou!!!</p>";
  }

  divResultado.innerHTML = elementoResultado;

  //console.log(cartaMaquina);
  exibirCartaMaquina();

  document.getElementById("btnJogar").disabled = true;
}
