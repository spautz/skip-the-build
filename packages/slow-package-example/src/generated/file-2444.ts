export type Thing2444<T> = T extends infer U ? U[] : never;

export const value2444: Thing2444<number> = [2444];
