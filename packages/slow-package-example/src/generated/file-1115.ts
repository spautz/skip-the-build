export type Thing1115<T> = T extends infer U ? U[] : never;

export const value1115: Thing1115<number> = [1115];
