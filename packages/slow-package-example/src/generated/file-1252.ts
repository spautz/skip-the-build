export type Thing1252<T> = T extends infer U ? U[] : never;

export const value1252: Thing1252<number> = [1252];
