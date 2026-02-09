export type Thing2109<T> = T extends infer U ? U[] : never;

export const value2109: Thing2109<number> = [2109];
