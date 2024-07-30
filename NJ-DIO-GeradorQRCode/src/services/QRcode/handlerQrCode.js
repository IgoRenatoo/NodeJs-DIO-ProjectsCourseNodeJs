import qrcodet from "qrcode-terminal";
import chalk from "chalk";

export async function handlerQrCode(err, result){
  if (err) {
    console.error("Erro ao obter dados do prompt:", err);
    return;
  }
  const isSmall = result.type == 2 ;
  qrcodet.generate(result.type, { small: isSmall}, (qcode) => {
    console.log(chalk.green('QRCODE Gerado com sucesso! \n'))
    console.log(qcode)
  })
}