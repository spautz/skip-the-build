export type Thing1375<T> = T extends infer U ? U[] : never;

export const value1375: Thing1375<number> = [1375];
