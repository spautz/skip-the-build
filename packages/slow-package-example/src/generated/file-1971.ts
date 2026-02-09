export type Thing1971<T> = T extends infer U ? U[] : never;

export const value1971: Thing1971<number> = [1971];
