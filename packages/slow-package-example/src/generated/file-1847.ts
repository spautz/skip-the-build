export type Thing1847<T> = T extends infer U ? U[] : never;

export const value1847: Thing1847<number> = [1847];
