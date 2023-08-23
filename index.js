

const readline = require('readline');
const { encryptEnviromentVariables, decryptEnviromentVariables } = require('./managerEncryptor');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const showMenu = () => {
  console.log('-----------------');
  console.log('1. Encrypt Data');
  console.log('2. Decrypt Data');
  console.log('0. Exit');
  console.log('-----------------');
};

const main = async () => {
  let choice;

  do {
    showMenu();
    choice = await new Promise((resolve) =>
      rl.question('Select an option: ', (answer) => resolve(answer))
    );

    switch (choice) {
      case '1':
        const dataToEncrypt = await new Promise((resolve) =>{
          rl.question('Enter the word to encrypt:' , (data) => resolve(data))}
        );
        const encryptedData = await encryptEnviromentVariables(dataToEncrypt);
        console.log('Encrypted data:\n',encryptedData);
        break;

      case '2':
        const dataToDecrypt = await new Promise((resolve) =>
          rl.question('Enter the word to decrypt: ' , (data) => resolve(data))
        );
        const decryptedData = await decryptEnviromentVariables(dataToDecrypt);
        console.log('Decrypted data:\n',decryptedData);
        break;

      case '0':
        console.log('Exiting the app. Goodbye!');
        break;

      default:
        console.log('Invalid option. Please select again.');
    }
  } while (choice !== '0');

  rl.close();
};

main();
