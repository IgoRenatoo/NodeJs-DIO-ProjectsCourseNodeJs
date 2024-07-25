// Array contendo todos os itens no carrinho
let myCart = [];
// Importando função do carrinho de criar produto, calcular, deletar e remover.
import * as cartService from './services/cart.js';

console.log("Welcome to Shopee Store! \n\n")

// Adição de itens no carrinho!
await cartService.createProduct(myCart, 'Sabão', 13, 4);
await cartService.createProduct(myCart, 'Saco de lixo', 5, 3);
await cartService.createProduct(myCart, 'Coca-Cola', 16.25, 6);
await cartService.createProduct(myCart, 'Detergente', 9, 2);
console.log("1 - Atualmente temos esse itens no carrinho! " + '\n\n'  + JSON.stringify(myCart) + '\n')

// Função para calcular todos os itens do carrinho!
async function valorTotal(){
  let valorTotal = await cartService.calculateTotal(myCart)
  console.log(`2 - Atualmente o carrinho tem um total de R$ ${valorTotal} em produtos!\n`)
}await valorTotal();

// Função para deletar item com valor mais alto!
async function removeItemMostValue(){
  myCart = await cartService.removeHigherValue(myCart);
  console.log(`3 - Após a remoção  do item mais caro o carrinho ficou assim: ${JSON.stringify(myCart)}\n`)
}await removeItemMostValue();

// Função para deletar item pelo ID!
async function removeItemID(){
  let selectID = 2; // Seletor de ID de forma manual.
  myCart = await cartService.removeItemId(myCart, selectID);
  console.log(`4 - Item ${selectID} deletado agora seu carrinho tem esses itens: ${JSON.stringify(myCart)}\n`)
}await removeItemID()

// Função para deletar todos os itens do carrinho!
async function deleteAll(){
  myCart = await cartService.deleteItem(myCart);  
  console.log(`5 - Agora meu carrinho tem esses itens: ${myCart}\n`)
}await deleteAll()