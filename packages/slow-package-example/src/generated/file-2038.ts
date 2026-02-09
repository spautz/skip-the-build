export type Thing2038<T> = T extends infer U ? U[] : never;

export const value2038: Thing2038<number> = [2038];
