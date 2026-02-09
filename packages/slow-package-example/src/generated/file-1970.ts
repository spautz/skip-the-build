export type Thing1970<T> = T extends infer U ? U[] : never;

export const value1970: Thing1970<number> = [1970];
