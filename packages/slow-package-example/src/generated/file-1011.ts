export type Thing1011<T> = T extends infer U ? U[] : never;

export const value1011: Thing1011<number> = [1011];
