export type Thing926<T> = T extends infer U ? U[] : never;

export const value926: Thing926<number> = [926];
