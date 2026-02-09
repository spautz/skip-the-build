export type Thing1743<T> = T extends infer U ? U[] : never;

export const value1743: Thing1743<number> = [1743];
