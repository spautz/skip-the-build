export type Thing1944<T> = T extends infer U ? U[] : never;

export const value1944: Thing1944<number> = [1944];
