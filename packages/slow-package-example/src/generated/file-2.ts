export type Thing2<T> = T extends infer U ? U[] : never;

export const value2: Thing2<number> = [2];
