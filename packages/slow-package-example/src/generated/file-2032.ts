export type Thing2032<T> = T extends infer U ? U[] : never;

export const value2032: Thing2032<number> = [2032];
