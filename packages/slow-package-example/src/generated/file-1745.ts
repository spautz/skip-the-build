export type Thing1745<T> = T extends infer U ? U[] : never;

export const value1745: Thing1745<number> = [1745];
