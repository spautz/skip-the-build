export type Thing1129<T> = T extends infer U ? U[] : never;

export const value1129: Thing1129<number> = [1129];
