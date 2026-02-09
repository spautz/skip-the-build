export type Thing1012<T> = T extends infer U ? U[] : never;

export const value1012: Thing1012<number> = [1012];
