export type Thing1269<T> = T extends infer U ? U[] : never;

export const value1269: Thing1269<number> = [1269];
