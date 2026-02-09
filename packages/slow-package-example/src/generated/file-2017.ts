export type Thing2017<T> = T extends infer U ? U[] : never;

export const value2017: Thing2017<number> = [2017];
