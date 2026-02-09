export type Thing2098<T> = T extends infer U ? U[] : never;

export const value2098: Thing2098<number> = [2098];
