export type Thing1941<T> = T extends infer U ? U[] : never;

export const value1941: Thing1941<number> = [1941];
