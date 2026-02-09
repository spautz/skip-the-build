export type Thing1411<T> = T extends infer U ? U[] : never;

export const value1411: Thing1411<number> = [1411];
