export type Thing2061<T> = T extends infer U ? U[] : never;

export const value2061: Thing2061<number> = [2061];
