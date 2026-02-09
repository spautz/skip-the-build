export type Thing1998<T> = T extends infer U ? U[] : never;

export const value1998: Thing1998<number> = [1998];
