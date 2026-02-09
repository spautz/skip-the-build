export type Thing1864<T> = T extends infer U ? U[] : never;

export const value1864: Thing1864<number> = [1864];
