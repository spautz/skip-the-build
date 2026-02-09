export type Thing2642<T> = T extends infer U ? U[] : never;

export const value2642: Thing2642<number> = [2642];
