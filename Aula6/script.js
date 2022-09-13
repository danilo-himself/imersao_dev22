var rafa = {
  nome: "Rafa",
  trofeu: false,
  vitorias: 2,
  empates: 1,
  derrotas: 1,
  pontos: 0
};
var paulo = {
  nome: "Paulo",
  trofeu: false,
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
};
var gui = {
  nome: "Gui",
  trofeu: false,
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
};

// console.log(rafa.vitorias);
// console.log(paulo.empates);

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

var jogadores = [];
jogadores.push(rafa);
jogadores.push(paulo);
jogadores.push(gui);

calculaTrofeu();
exibeJogadoresNaTela(jogadores);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  // console.log(pontos);
  return pontos;
}

function calculaTrofeu() {
  var indiceDoJogadorComMaisPontos = 0;
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].trofeu = false;
    if (jogadores[i].pontos > jogadores[indiceDoJogadorComMaisPontos].pontos) {
      indiceDoJogadorComMaisPontos = i;
    }
  }
  //console.log(indiceDoJogadorComMaisPontos);
  jogadores[indiceDoJogadorComMaisPontos].trofeu = true;
}

// console.log(jogadores);

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (i = 0; i < jogadores.length; i++) {
    if (jogadores[i].trofeu == true) {
      elemento += "<tr><td>" + jogadores[i].nome + "&#127942;</td>";
    } else {
      elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    }

    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "<td><button onClick='zerar(" + i + ")'>Zerar</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  calculaTrofeu();
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  calculaTrofeu();
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function zerar(i) {
  var jogador = jogadores[i];
  jogador.trofeu = false;
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = calculaPontos(jogador);
  calculaTrofeu();
  exibeJogadoresNaTela(jogadores);
}

function adicionarJogador() {
  var nome = document.getElementById("nome").value;
  jogador = {
    nome: nome,
    trofeu: false,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  jogadores.push(jogador);
  document.getElementById("nome").value = "";
  exibeJogadoresNaTela(jogadores);
}
