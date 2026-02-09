export type Thing1985<T> = T extends infer U ? U[] : never;

export const value1985: Thing1985<number> = [1985];
