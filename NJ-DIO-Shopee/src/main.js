// Array contendo todos os itens no carrinho
let myCart = [];
// Importando função do carrinho de criar produto, calcular, deletar e remover.
import * as cartService from './services/cart.js';

console.log("Welcome to Shopee Store! \n\n")

// Adição de itens no carrinho!
let addItemCart1 = await cartService.createProduct(myCart, 'Sabão', 12.99, 4);
let addItemCart2 = await cartService.createProduct(myCart, 'Detergente', 8.9, 2);
console.log("Atualmente temos esse itens no carrinho! " + '\n\n'  + JSON.stringify(myCart) + '\n')

// Função para calcular todos os itens do carrinho!
async function valorTotal(){
  let valorTotal = await cartService.calculateTotal(myCart)
  console.log(`Atualmente o carrinho tem um total de R$ ${valorTotal} em produtos!\n`)
}valorTotal();

// Função para deletar item com valor mais alto!
async function removeItem(){
  console.log('1', myCart)
  await cartService.removeItemHigherValue(myCart);
  console.log(`Após a remoção seu carrinho ficou com esses itens: ${JSON.stringify(myCart)}\n`)
}removeItem()


// Função para deletar item pelo ID!
async function removeItemID(){
  let selectID = 1; // Seletor de ID de forma manual.
  myCart = await cartService.removeItemId(myCart, selectID);
  console.log(`Item ${selectID} deletado agora seu carrinho tem esses itens: ${JSON.stringify(myCart)}\n`)
}removeItemID()


// Função para deletar todos os itens do carrinho!
async function deleteAll(){
  myCart = await cartService.deleteItem(myCart);  
  console.log(`Agora meu carrinho tem esses itens: ${myCart}\n`)
}deleteAll()