export type Thing2203<T> = T extends infer U ? U[] : never;

export const value2203: Thing2203<number> = [2203];
