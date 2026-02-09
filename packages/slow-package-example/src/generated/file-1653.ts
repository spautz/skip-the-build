export type Thing1653<T> = T extends infer U ? U[] : never;

export const value1653: Thing1653<number> = [1653];
