export type Thing2004<T> = T extends infer U ? U[] : never;

export const value2004: Thing2004<number> = [2004];
