export type Thing164<T> = T extends infer U ? U[] : never;

export const value164: Thing164<number> = [164];
