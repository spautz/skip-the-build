export type Thing2551<T> = T extends infer U ? U[] : never;

export const value2551: Thing2551<number> = [2551];
