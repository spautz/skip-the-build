export type Thing1124<T> = T extends infer U ? U[] : never;

export const value1124: Thing1124<number> = [1124];
