export type Thing2307<T> = T extends infer U ? U[] : never;

export const value2307: Thing2307<number> = [2307];
