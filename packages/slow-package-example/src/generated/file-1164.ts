export type Thing1164<T> = T extends infer U ? U[] : never;

export const value1164: Thing1164<number> = [1164];
