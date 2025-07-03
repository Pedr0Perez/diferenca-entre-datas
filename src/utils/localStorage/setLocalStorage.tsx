import { encrypt } from "@/libs/encrypt/crypto";

export default function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, encrypt(value));
}
