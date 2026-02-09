export type Thing2020<T> = T extends infer U ? U[] : never;

export const value2020: Thing2020<number> = [2020];
