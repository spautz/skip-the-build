export type Thing1255<T> = T extends infer U ? U[] : never;

export const value1255: Thing1255<number> = [1255];
