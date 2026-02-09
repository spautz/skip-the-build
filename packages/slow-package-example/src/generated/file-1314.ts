export type Thing1314<T> = T extends infer U ? U[] : never;

export const value1314: Thing1314<number> = [1314];
