export type Thing2015<T> = T extends infer U ? U[] : never;

export const value2015: Thing2015<number> = [2015];
