export type Thing1777<T> = T extends infer U ? U[] : never;

export const value1777: Thing1777<number> = [1777];
