# 🔲 Meu Projeto de QR Code e Barcode

## 📜 Descrição do Projeto

Este projeto é uma aplicação que permite a criação de códigos QR e códigos de barras através de uma interface de linha de comando. Utilizando a biblioteca `prompt`, o usuário pode escolher o tipo de código que deseja gerar e o sistema processa a solicitação de acordo com a escolha feita.

## ⚙️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **prompt**: Biblioteca para criar prompts interativos na linha de comando.
- **QR-Code Library**: Para geração de códigos QR.
- **Barcode Library**: Para geração de códigos de barras.

## 🧩 Funcionalidades

1. **`createQrCode()`**
   - Gera um código QR com base nas especificações fornecidas pelo usuário.

2. **`createBarcode()`**
   - Gera um código de barras de acordo com as especificações fornecidas.

3. **`prompt.get(promptMain, callback)`**
   - Permite ao usuário escolher entre gerar um código QR ou um código de barras através de uma interface interativa.

## 🛠️ Pré-requisitos de Habilidades

- Conhecimento básico em JavaScript e Node.js.
- Familiaridade com o uso de bibliotecas NPM.
- Experiência com programação assíncrona em JavaScript.

## 🎯 Habilidades Adquiridas

- Implementação de prompts interativos em Node.js.
- Geração de códigos QR e códigos de barras utilizando bibliotecas específicas.
- Manipulação de arquivos e estruturas de pastas em projetos Node.js.

## 📂 Estrutura do Projeto

- **`src/`**
  - **`prompts/`**
    - `prompt-main.js`: Definições de prompts principais.
    - `prompt-qrcode.js`: Definições de prompts para códigos QR.
  - **`services/`**
    - **`barcode/`**
      - `create-barcode.js`: Lógica para criar códigos de barras.
      - `handler-barcode.js`: Manipulador para códigos de barras.
    - **`qrcode/`**
      - `create-qrcode.js`: Lógica para criar códigos QR.
      - `handler-qrcode.js`: Manipulador para códigos QR.

## 🔄 Refatoração

Durante o desenvolvimento, o código foi refatorado para melhorar a modularidade e a clareza. As funções foram organizadas em módulos distintos para facilitar a manutenção e a expansão futura.

## 🏁 Conclusão

Este projeto demonstra a aplicação prática de bibliotecas externas em Node.js para a criação de códigos QR e códigos de barras, fornecendo uma solução interativa e funcional para geração desses códigos.