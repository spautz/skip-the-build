export type Thing1069<T> = T extends infer U ? U[] : never;

export const value1069: Thing1069<number> = [1069];
