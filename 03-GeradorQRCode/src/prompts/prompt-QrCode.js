export const promptQrCode = [
  {
    name: "link",
    description: 'Digite o link do produto para gerar QRCode:  ',
    pattern: /^www\.[a-zA-Z0-9-]+\.(com\.br)$/,
    message: 'O site deve iniciar com "WWW" e conter ".com.br" no final!',
    required: false
  },
  {
    name: 'type',
    description: 'Escolha o tipo de QRCODE (1 - Normal ou 2 - Small)',
    pattern: /^[1-2]+$/,
    message: 'Escolha apenas entre 1 ou 2!',
    required: true
  }
];