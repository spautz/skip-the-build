export type Thing1587<T> = T extends infer U ? U[] : never;

export const value1587: Thing1587<number> = [1587];
