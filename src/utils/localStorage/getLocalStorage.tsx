import { decrypt } from "@/libs/encrypt/crypto";

export default function getLocalStorage(key: string): string | null {
  try {
    return decrypt<string>(localStorage.getItem(key)) ?? null;
  } catch {
    return null;
  }
}
