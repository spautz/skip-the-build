export type Thing1960<T> = T extends infer U ? U[] : never;

export const value1960: Thing1960<number> = [1960];
