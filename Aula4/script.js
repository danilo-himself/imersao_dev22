var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/thumb/7/79/Yesterday_%282019%29_poster.jpg/250px-Yesterday_%282019%29_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/9/90/Steve_Jobs_%28filme%29.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/c/c6/Sunshine_OST.jpg"
];

/*
for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
*/

listar();

function inserir() {
  var url = document.getElementById("inputImg").value;
  listaFilmes.push(url);
  //console.log(listaFilmes);
  limparFilmes();
  listar();
}

function listar() {
  var div = document.getElementById("divFilmes");
  var innerHtml = "";

  for (var i = 0; i < listaFilmes.length; i++) {
    innerHtml += "<img src=" + listaFilmes[i] + ">";
  }

  div.innerHTML = innerHtml;
}

function limparFilmes() {
  var div = document.getElementById("divFilmes");
  div.innerHTML = "";
}
