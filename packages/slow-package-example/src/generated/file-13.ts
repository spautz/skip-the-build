export type Thing13<T> = T extends infer U ? U[] : never;

export const value13: Thing13<number> = [13];
