export type Thing2043<T> = T extends infer U ? U[] : never;

export const value2043: Thing2043<number> = [2043];
