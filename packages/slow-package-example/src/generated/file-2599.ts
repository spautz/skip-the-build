export type Thing2599<T> = T extends infer U ? U[] : never;

export const value2599: Thing2599<number> = [2599];
