export type Thing1052<T> = T extends infer U ? U[] : never;

export const value1052: Thing1052<number> = [1052];
