export default function generateRandomHash(): string {
  return crypto.randomUUID();
}
