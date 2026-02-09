export type Thing1672<T> = T extends infer U ? U[] : never;

export const value1672: Thing1672<number> = [1672];
