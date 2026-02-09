export type Thing2222<T> = T extends infer U ? U[] : never;

export const value2222: Thing2222<number> = [2222];
