export type Thing222<T> = T extends infer U ? U[] : never;

export const value222: Thing222<number> = [222];
