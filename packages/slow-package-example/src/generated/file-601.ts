export type Thing601<T> = T extends infer U ? U[] : never;

export const value601: Thing601<number> = [601];
