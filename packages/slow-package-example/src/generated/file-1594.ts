export type Thing1594<T> = T extends infer U ? U[] : never;

export const value1594: Thing1594<number> = [1594];
