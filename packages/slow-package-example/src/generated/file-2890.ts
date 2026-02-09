export type Thing2890<T> = T extends infer U ? U[] : never;

export const value2890: Thing2890<number> = [2890];
