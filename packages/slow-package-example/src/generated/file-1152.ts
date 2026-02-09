export type Thing1152<T> = T extends infer U ? U[] : never;

export const value1152: Thing1152<number> = [1152];
