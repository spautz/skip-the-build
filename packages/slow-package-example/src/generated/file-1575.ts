export type Thing1575<T> = T extends infer U ? U[] : never;

export const value1575: Thing1575<number> = [1575];
