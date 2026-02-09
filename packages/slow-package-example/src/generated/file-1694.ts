export type Thing1694<T> = T extends infer U ? U[] : never;

export const value1694: Thing1694<number> = [1694];
