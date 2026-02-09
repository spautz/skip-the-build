export type Thing2050<T> = T extends infer U ? U[] : never;

export const value2050: Thing2050<number> = [2050];
