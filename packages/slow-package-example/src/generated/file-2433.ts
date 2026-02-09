export type Thing2433<T> = T extends infer U ? U[] : never;

export const value2433: Thing2433<number> = [2433];
