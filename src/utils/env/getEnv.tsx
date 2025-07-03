export default function getEnv<T>(key: string): T {
  return process.env[`NEXT_${key}`] as T;
}
