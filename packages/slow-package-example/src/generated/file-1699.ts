export type Thing1699<T> = T extends infer U ? U[] : never;

export const value1699: Thing1699<number> = [1699];
