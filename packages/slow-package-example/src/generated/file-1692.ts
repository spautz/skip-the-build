export type Thing1692<T> = T extends infer U ? U[] : never;

export const value1692: Thing1692<number> = [1692];
