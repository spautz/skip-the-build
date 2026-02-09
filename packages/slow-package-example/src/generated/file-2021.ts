export type Thing2021<T> = T extends infer U ? U[] : never;

export const value2021: Thing2021<number> = [2021];
