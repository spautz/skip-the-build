export type Thing2903<T> = T extends infer U ? U[] : never;

export const value2903: Thing2903<number> = [2903];
