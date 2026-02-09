export type Thing1262<T> = T extends infer U ? U[] : never;

export const value1262: Thing1262<number> = [1262];
