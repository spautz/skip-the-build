export type Thing1719<T> = T extends infer U ? U[] : never;

export const value1719: Thing1719<number> = [1719];
