export type Thing2099<T> = T extends infer U ? U[] : never;

export const value2099: Thing2099<number> = [2099];
