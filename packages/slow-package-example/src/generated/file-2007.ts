export type Thing2007<T> = T extends infer U ? U[] : never;

export const value2007: Thing2007<number> = [2007];
