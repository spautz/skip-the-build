export type Thing2442<T> = T extends infer U ? U[] : never;

export const value2442: Thing2442<number> = [2442];
