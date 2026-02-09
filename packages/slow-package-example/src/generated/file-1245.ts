export type Thing1245<T> = T extends infer U ? U[] : never;

export const value1245: Thing1245<number> = [1245];
