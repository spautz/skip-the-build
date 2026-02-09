export type Thing1844<T> = T extends infer U ? U[] : never;

export const value1844: Thing1844<number> = [1844];
