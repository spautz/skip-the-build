export type Thing2421<T> = T extends infer U ? U[] : never;

export const value2421: Thing2421<number> = [2421];
