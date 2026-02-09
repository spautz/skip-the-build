export type Thing2012<T> = T extends infer U ? U[] : never;

export const value2012: Thing2012<number> = [2012];
