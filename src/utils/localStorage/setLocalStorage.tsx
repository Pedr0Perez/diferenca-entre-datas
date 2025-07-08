import { encrypt } from "@/libs/encrypt/crypto";

export default function setLocalStorage(key: string, value: string) {
  if (typeof window === "undefined") return;

  localStorage.setItem(key, encrypt(value));
}
