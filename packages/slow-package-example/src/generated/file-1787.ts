export type Thing1787<T> = T extends infer U ? U[] : never;

export const value1787: Thing1787<number> = [1787];
