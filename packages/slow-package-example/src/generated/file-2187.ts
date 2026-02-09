export type Thing2187<T> = T extends infer U ? U[] : never;

export const value2187: Thing2187<number> = [2187];
