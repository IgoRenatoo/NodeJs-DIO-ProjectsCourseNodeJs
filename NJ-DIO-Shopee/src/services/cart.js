// Cria o produto e adiciona no carrinho!
export function createProduct(myCart, name, price, quantity) {
  const product = {
    item: name,
    price: price,
    quantity: quantity,
    subtotal: () => price * quantity
  };
  myCart.push(product);
  return myCart;
}
export async function calculateTotal(myCart){
  return myCart.reduce((total, item) => total + item.subtotal(), 0)
}

export async function deleteItem(myCart, name){}

export async function removeItem(myCart, index){}

