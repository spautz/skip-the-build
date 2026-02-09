export type Thing1771<T> = T extends infer U ? U[] : never;

export const value1771: Thing1771<number> = [1771];
