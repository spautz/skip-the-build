export type Thing2785<T> = T extends infer U ? U[] : never;

export const value2785: Thing2785<number> = [2785];
