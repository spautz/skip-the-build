export type Thing1113<T> = T extends infer U ? U[] : never;

export const value1113: Thing1113<number> = [1113];
