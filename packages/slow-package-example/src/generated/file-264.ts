export type Thing264<T> = T extends infer U ? U[] : never;

export const value264: Thing264<number> = [264];
