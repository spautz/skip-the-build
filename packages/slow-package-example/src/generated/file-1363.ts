export type Thing1363<T> = T extends infer U ? U[] : never;

export const value1363: Thing1363<number> = [1363];
