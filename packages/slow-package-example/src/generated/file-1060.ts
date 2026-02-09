export type Thing1060<T> = T extends infer U ? U[] : never;

export const value1060: Thing1060<number> = [1060];
