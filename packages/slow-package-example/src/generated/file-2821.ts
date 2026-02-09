export type Thing2821<T> = T extends infer U ? U[] : never;

export const value2821: Thing2821<number> = [2821];
