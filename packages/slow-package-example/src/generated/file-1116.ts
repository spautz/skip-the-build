export type Thing1116<T> = T extends infer U ? U[] : never;

export const value1116: Thing1116<number> = [1116];
