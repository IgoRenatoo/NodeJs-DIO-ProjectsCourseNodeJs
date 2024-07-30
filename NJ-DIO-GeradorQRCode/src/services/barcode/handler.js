export async function handlerBarcode(){
  const passwordLength = process.env.PASSWORD_LENGTH;
  let characters = [];
  let password = "";

  (process.env.UPPERCASE_LETTERS === "true") ? characters.push(... "ABCDEFGHIJKLMNOPQRSTUVXZ") : null;
  (process.env.LOWERCASE_LETTERS === "true") ? characters.push(... "abcdefghijklmnopqrstuvxz") : null;
  (process.env.NUMBERS === "true") ? characters.push(... "0123456789") : null;
  (process.env.ESPECIAL_CHARACTERS === "true") ? characters.push(... "!@#$%¨&*_+=-") : null;

  for ( let i = 0; i < passwordLength ; i++){
    let character = Math.floor(Math.random()*characters.length)
    password += characters[character]
  }
  return password;
}