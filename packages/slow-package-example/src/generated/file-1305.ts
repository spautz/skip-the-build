export type Thing1305<T> = T extends infer U ? U[] : never;

export const value1305: Thing1305<number> = [1305];
