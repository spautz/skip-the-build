export type Thing2250<T> = T extends infer U ? U[] : never;

export const value2250: Thing2250<number> = [2250];
