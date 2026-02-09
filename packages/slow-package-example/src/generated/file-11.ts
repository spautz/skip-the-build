export type Thing11<T> = T extends infer U ? U[] : never;

export const value11: Thing11<number> = [11];
