export type Thing2521<T> = T extends infer U ? U[] : never;

export const value2521: Thing2521<number> = [2521];
