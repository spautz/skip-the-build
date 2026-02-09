export type Thing1851<T> = T extends infer U ? U[] : never;

export const value1851: Thing1851<number> = [1851];
