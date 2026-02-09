export type Thing1975<T> = T extends infer U ? U[] : never;

export const value1975: Thing1975<number> = [1975];
