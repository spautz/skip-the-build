export type Thing106<T> = T extends infer U ? U[] : never;

export const value106: Thing106<number> = [106];
