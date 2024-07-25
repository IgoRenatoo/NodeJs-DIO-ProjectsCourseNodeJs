// Array contendo todos os itens no carrinho
let myCart = [];

// Importando função do carrinho de criar produto, calcular, deletar e remover.
import { createProduct, calculateTotal, deleteItem, removeItem } from './services/cart.js'

let addItemCart1 = await createProduct(myCart, 'Sabão', 12.99, 4);
let addItemCart2 = await createProduct(myCart, 'Detergente', 8.9, 2);

console.log("Welcome to Shopee Store! \n\n" + 'Meu carrinho: ' + JSON.stringify(myCart) + '\n')
console.log(`Atualmente o carrinho tem R$ ${await calculateTotal(myCart)} em produtos! `)

