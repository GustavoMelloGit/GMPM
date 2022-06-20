import CryptoJS from 'crypto-js';

export const encryptText = (text: string) => {
  const envKey = process.env.REACT_APP_CRYPTO_KEY;
  if (envKey) {
    const encryptedPassword = CryptoJS.AES.encrypt(text, envKey);
    return encryptedPassword.toString();
  } else {
    return text;
  }
};
