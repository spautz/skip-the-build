export type Thing1190<T> = T extends infer U ? U[] : never;

export const value1190: Thing1190<number> = [1190];
