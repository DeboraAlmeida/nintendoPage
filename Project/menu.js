//alert("This is a fictional web page created only for study purposes. I do not own Nintendo or any character displayed here. The informations about the services herein presented are not related with the real Nintendo business. ");
//alert("Esta é uma página web fictícia criada apenas para fins de estudo. Eu não possuo Nintendo ou qualquer personagem exibido aqui. As informações sobre os serviços apresentados nesta página não estão relacionadas aos negócios reais da Nintendo.")

var alternador = document.querySelector('.js-botao-chaveador');
alternador.onclick = function() {
  var menu = document.querySelector('.js-lista-menu');
  menu.classList.toggle('navegacao__lista-menu--exibindo');
}
