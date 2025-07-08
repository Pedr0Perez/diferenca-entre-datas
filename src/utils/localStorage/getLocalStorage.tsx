import { decrypt } from "@/libs/encrypt/crypto";

export default function getLocalStorage(key: string): string | null {
  if (typeof window === "undefined") return null;

  return decrypt(localStorage.getItem(key)) ?? null;
}
