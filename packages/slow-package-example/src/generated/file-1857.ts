export type Thing1857<T> = T extends infer U ? U[] : never;

export const value1857: Thing1857<number> = [1857];
