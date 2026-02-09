export type Thing780<T> = T extends infer U ? U[] : never;

export const value780: Thing780<number> = [780];
