export type Thing2022<T> = T extends infer U ? U[] : never;

export const value2022: Thing2022<number> = [2022];
