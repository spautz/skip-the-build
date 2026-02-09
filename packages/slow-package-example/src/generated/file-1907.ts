export type Thing1907<T> = T extends infer U ? U[] : never;

export const value1907: Thing1907<number> = [1907];
