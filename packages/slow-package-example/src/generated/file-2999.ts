export type Thing2999<T> = T extends infer U ? U[] : never;

export const value2999: Thing2999<number> = [2999];
