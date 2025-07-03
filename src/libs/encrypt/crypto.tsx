import { AES } from "crypto-ts";
import { WordArray } from "crypto-ts/src/lib/WordArray";
import { enc } from "crypto-ts";

const secretKey: string =
  "c6f3afa47e33398abb202c38c673d12dacb493f581a65696330e24950b5f2485";

export function encrypt(data: string | WordArray): string {
  const encryptData = AES.encrypt(data, secretKey).toString();

  return encryptData;
}

export function decrypt<T>(data: string | null): T | null {
  if (data === null) return null;

  const bytes: WordArray = AES.decrypt(data!, secretKey);

  const decryptedData: T = JSON.parse(bytes.toString(enc.Utf8));

  return decryptedData;
}
