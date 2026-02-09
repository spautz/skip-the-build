export type Thing2424<T> = T extends infer U ? U[] : never;

export const value2424: Thing2424<number> = [2424];
