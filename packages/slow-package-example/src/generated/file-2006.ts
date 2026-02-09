export type Thing2006<T> = T extends infer U ? U[] : never;

export const value2006: Thing2006<number> = [2006];
