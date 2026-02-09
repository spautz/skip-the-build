export type Thing48<T> = T extends infer U ? U[] : never;

export const value48: Thing48<number> = [48];
