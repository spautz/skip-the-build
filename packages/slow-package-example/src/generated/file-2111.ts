export type Thing2111<T> = T extends infer U ? U[] : never;

export const value2111: Thing2111<number> = [2111];
