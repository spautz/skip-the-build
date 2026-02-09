export type Thing701<T> = T extends infer U ? U[] : never;

export const value701: Thing701<number> = [701];
