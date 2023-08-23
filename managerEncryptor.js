const CryptoJS = require('crypto-js');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const decryptEnviromentVariables = (enviromentVariable) => {
  try {
    return JSON.parse(
      CryptoJS.AES.decrypt(enviromentVariable, process.env.KEY_DB).toString(
        CryptoJS.enc.Utf8
      )
    );
  } catch (error) {
    console.log('error desencriptando una variable de entorno', error);
    return undefined;
  }
};

const encryptEnviromentVariables = (text, key) => {
  return CryptoJS.AES.encrypt(JSON.stringify(text), process.env.KEY_DB).toString();
};


module.exports = {
  decryptEnviromentVariables,
  encryptEnviromentVariables
}