export type Thing1018<T> = T extends infer U ? U[] : never;

export const value1018: Thing1018<number> = [1018];
