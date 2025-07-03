import { decrypt } from "@/libs/encrypt/crypto";

export default function getLocalStorage(key: string): string | null {
  return decrypt<string>(localStorage.getItem(key));
}
