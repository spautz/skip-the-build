export type Thing2723<T> = T extends infer U ? U[] : never;

export const value2723: Thing2723<number> = [2723];
