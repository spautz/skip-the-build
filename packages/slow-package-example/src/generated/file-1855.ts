export type Thing1855<T> = T extends infer U ? U[] : never;

export const value1855: Thing1855<number> = [1855];
