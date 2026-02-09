export type Thing2333<T> = T extends infer U ? U[] : never;

export const value2333: Thing2333<number> = [2333];
