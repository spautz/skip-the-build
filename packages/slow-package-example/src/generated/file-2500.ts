export type Thing2500<T> = T extends infer U ? U[] : never;

export const value2500: Thing2500<number> = [2500];
