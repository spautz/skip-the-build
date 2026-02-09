export type Thing2588<T> = T extends infer U ? U[] : never;

export const value2588: Thing2588<number> = [2588];
