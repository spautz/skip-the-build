export type Thing1439<T> = T extends infer U ? U[] : never;

export const value1439: Thing1439<number> = [1439];
