export type Thing1091<T> = T extends infer U ? U[] : never;

export const value1091: Thing1091<number> = [1091];
