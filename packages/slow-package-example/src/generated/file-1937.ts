export type Thing1937<T> = T extends infer U ? U[] : never;

export const value1937: Thing1937<number> = [1937];
