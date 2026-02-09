export type Thing1894<T> = T extends infer U ? U[] : never;

export const value1894: Thing1894<number> = [1894];
