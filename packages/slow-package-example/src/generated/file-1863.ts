export type Thing1863<T> = T extends infer U ? U[] : never;

export const value1863: Thing1863<number> = [1863];
