export type Thing1896<T> = T extends infer U ? U[] : never;

export const value1896: Thing1896<number> = [1896];
