export type Thing2049<T> = T extends infer U ? U[] : never;

export const value2049: Thing2049<number> = [2049];
