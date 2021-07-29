let custoProduto = 50;
let valorVenda = 150;

let lucro1000 = (valorVenda - (custoProduto * 1, 2)) * 1000;

if (custoProduto < 0 || valorVenda < 0) {
  console.log("Valor(es) inválido(s)!!!");
  exit();
} else {
  console.log("Lucro de", lucro1000, "🤑🤑🤑");
}
