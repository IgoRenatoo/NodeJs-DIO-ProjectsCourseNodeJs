export const promptMain = [ 
  {
    name: "product",
    description: "Informe o nome do produto desejado!",
    pattern: /^[ a-zA-Z \s \- ]+$/,
    message: "O nome deve ter apenas letras, espaços ou traços",
    required: true
  },
  {
    name: "type",
    description: "Selecione o modo de pagamento ( 1 - QRcode ) e ( 2 - Pix )",
    pattern: /^[1-2]+$/,
    message: "Selecione apenas 1 ou 2!",
    required: true
  }
]