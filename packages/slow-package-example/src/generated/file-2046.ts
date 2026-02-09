export type Thing2046<T> = T extends infer U ? U[] : never;

export const value2046: Thing2046<number> = [2046];
