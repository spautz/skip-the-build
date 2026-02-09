export type Thing1669<T> = T extends infer U ? U[] : never;

export const value1669: Thing1669<number> = [1669];
