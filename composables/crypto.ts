// import crypto from "node:crypto";
import * as CryptoTS from "crypto-ts";

export function useCrypto() {
  // const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  //   modulusLength: 2048,
  // });

  const encryptToken = (token: string) => {
    // const encrypted_token = crypto.publicEncrypt(
    //   {
    //     key: publicKey,
    //     padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    //     oaepHash: "sha256",
    //   },
    //   Buffer.from(token)
    // );
    // return encrypted_token.toString("base64");
    const encrypted_token = CryptoTS.AES.encrypt(token, "SECRET");
    return encrypted_token.toString();
  };

  const decryptToken = (encrypted_token: string) => {
    // const buffer_data = Buffer.from(encrypted_token, "base64");
    // const decrypted_token = crypto.privateDecrypt(
    //   {
    //     key: privateKey,
    //     padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    //     oaepHash: "sha256",
    //   },
    //   buffer_data
    // );
    // return decrypted_token.toString();
    const decrypted_token = CryptoTS.AES.decrypt(encrypted_token, "SECRET");
    // const decrypted_token = CryptoTS.AES.decrypt(
    //   encrypted_token != null ? encrypted_token : "",
    //   "SECRET"
    // );
    const original_token = decrypted_token.toString(CryptoTS.enc.Utf8);
    return original_token;
  };

  return { encryptToken, decryptToken };
}
