export type Thing2018<T> = T extends infer U ? U[] : never;

export const value2018: Thing2018<number> = [2018];
