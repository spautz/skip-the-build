export type Thing1425<T> = T extends infer U ? U[] : never;

export const value1425: Thing1425<number> = [1425];
