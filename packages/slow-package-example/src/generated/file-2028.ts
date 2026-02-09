export type Thing2028<T> = T extends infer U ? U[] : never;

export const value2028: Thing2028<number> = [2028];
