export type Thing1742<T> = T extends infer U ? U[] : never;

export const value1742: Thing1742<number> = [1742];
