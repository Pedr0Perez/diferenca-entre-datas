export default function getPublicEnv<T>(key: string): T {
  return process.env[`NEXT_PUBLIC_${key}`] as T;
}
