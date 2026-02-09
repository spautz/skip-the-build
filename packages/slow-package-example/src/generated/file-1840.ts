export type Thing1840<T> = T extends infer U ? U[] : never;

export const value1840: Thing1840<number> = [1840];
