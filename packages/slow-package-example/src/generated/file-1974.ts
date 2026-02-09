export type Thing1974<T> = T extends infer U ? U[] : never;

export const value1974: Thing1974<number> = [1974];
