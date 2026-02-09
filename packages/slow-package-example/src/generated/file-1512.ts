export type Thing1512<T> = T extends infer U ? U[] : never;

export const value1512: Thing1512<number> = [1512];
