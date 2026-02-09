export type Thing1036<T> = T extends infer U ? U[] : never;

export const value1036: Thing1036<number> = [1036];
