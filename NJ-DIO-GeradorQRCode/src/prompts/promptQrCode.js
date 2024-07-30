export const promptQrCode = [
  {
    name: "link",
    description: 'Digite o link do site para gerar QRCode:  ',
  },
  {
    name: 'type',
    description: 'Escolha o tipo de QRCODE (1 - Normal ou 2 - Small)',
    pattern: /^[1-2]+$/,
    message: 'Escolha apenas entre 1 ou 2!',
    required: true
  }
];