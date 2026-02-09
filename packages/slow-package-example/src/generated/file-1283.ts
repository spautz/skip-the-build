export type Thing1283<T> = T extends infer U ? U[] : never;

export const value1283: Thing1283<number> = [1283];
