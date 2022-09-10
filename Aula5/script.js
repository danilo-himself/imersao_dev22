var listaDeFilmes = [];

function adicionarFilme() {
  //console.log("clicou");
  var filmeFavorito = document.getElementById("filme").value;

  if (filmeFavorito.endsWith(".jpg")) {
    listaDeFilmes.push(filmeFavorito);
    listarFilmesNaTela();
  } else {
    console.error("Formato inválido");
  }

  document.getElementById("filme").value = "";
}

function listarFilmesNaTela() {
  var elementoFilmeFavorito = "";
  //var elementoFilmeFavorito = "<img src=" + filme + ">";
  //var elementoListaFilmes = document.getElementById("listaFilmes");
  
  //console.log(listaDeFilmes);
  //console.log(elementoListaFilmes);

  for (i = 0; i < listaDeFilmes.length; i++) {
    //console.log(listaDeFilmes[i]);
    elementoFilmeFavorito = elementoFilmeFavorito + "<a href='' onclick='remover(" + i + ")' ><img src=" + listaDeFilmes[i] + " alt='Remover'></a>";
  }

  console.log(elementoFilmeFavorito);
  //elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  document.getElementById("listaFilmes").innerHTML = elementoFilmeFavorito;
}

function removerUltimo() {  
  listaDeFilmes.pop();
  //document.getElementById("listaFilmes").innerHTML = "";
  listarFilmesNaTela();
}

function remover(indice) {  
  listaDeFilmes.splice(indice, 1);
  //document.getElementById("listaFilmes").innerHTML = "";
  listarFilmesNaTela();
}
