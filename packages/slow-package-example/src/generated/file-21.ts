export type Thing21<T> = T extends infer U ? U[] : never;

export const value21: Thing21<number> = [21];
