export type Thing1045<T> = T extends infer U ? U[] : never;

export const value1045: Thing1045<number> = [1045];
