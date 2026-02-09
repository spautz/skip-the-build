export type Thing2418<T> = T extends infer U ? U[] : never;

export const value2418: Thing2418<number> = [2418];
