export type Thing2640<T> = T extends infer U ? U[] : never;

export const value2640: Thing2640<number> = [2640];
