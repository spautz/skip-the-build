export type Thing2703<T> = T extends infer U ? U[] : never;

export const value2703: Thing2703<number> = [2703];
