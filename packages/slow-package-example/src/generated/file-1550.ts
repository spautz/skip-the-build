export type Thing1550<T> = T extends infer U ? U[] : never;

export const value1550: Thing1550<number> = [1550];
