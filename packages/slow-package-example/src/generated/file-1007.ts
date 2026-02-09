export type Thing1007<T> = T extends infer U ? U[] : never;

export const value1007: Thing1007<number> = [1007];
