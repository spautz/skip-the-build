export type Thing2120<T> = T extends infer U ? U[] : never;

export const value2120: Thing2120<number> = [2120];
