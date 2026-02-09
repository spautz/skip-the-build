export type Thing1919<T> = T extends infer U ? U[] : never;

export const value1919: Thing1919<number> = [1919];
