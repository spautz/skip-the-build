export type Thing1803<T> = T extends infer U ? U[] : never;

export const value1803: Thing1803<number> = [1803];
