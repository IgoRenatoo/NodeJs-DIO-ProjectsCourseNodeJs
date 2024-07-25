let id = 0;
// Função para criar o produto e adiciona no carrinho!
export function createProduct(myCart, name, price, quantity) {
  id++;
  const product = {
    item: name,
    price: price,
    quantity: quantity,
    id: id,
    subtotal: () => price * quantity
  };
  myCart.push(product);
  return myCart;
}
// Função para calcular todos os itens do carrinho!
export async function calculateTotal(myCart){
  return myCart.reduce((total, item) => total + item.subtotal(), 0);
}
// Função para remover o item mais caro do carrinho!
export async function removeHigherValue(myCart){
  let mostValue = myCart.reduce((maxItem, currentItem) => {
    if(currentItem.price > maxItem.price){
      return currentItem;
    }else{
      return maxItem;
    }
  })
  // Filtra o carrinho para remover o item com o maior valor
  myCart = myCart.filter(item => item !== mostValue);
  return myCart;
}
// Função para remover o item pelo ID!
export async function removeItemId(myCart, selectID){
  myCart = myCart.filter(obj => obj.id != selectID);
  return myCart;
}
// Função para deletar todos os itens do carrinho!
export async function deleteItem(myCart){
  myCart.length = 0;
  myCart.push('Carrinho Zerado!');
  return myCart;
}