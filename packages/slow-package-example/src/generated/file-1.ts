export type Thing1<T> = T extends infer U ? U[] : never;

export const value1: Thing1<number> = [1];
