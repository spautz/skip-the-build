export type Thing2900<T> = T extends infer U ? U[] : never;

export const value2900: Thing2900<number> = [2900];
