export type Thing2019<T> = T extends infer U ? U[] : never;

export const value2019: Thing2019<number> = [2019];
