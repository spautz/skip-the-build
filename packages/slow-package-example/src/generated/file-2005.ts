export type Thing2005<T> = T extends infer U ? U[] : never;

export const value2005: Thing2005<number> = [2005];
