export type Thing1946<T> = T extends infer U ? U[] : never;

export const value1946: Thing1946<number> = [1946];
