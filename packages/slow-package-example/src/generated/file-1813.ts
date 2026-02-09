export type Thing1813<T> = T extends infer U ? U[] : never;

export const value1813: Thing1813<number> = [1813];
