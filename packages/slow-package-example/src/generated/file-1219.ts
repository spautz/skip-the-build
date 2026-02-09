export type Thing1219<T> = T extends infer U ? U[] : never;

export const value1219: Thing1219<number> = [1219];
