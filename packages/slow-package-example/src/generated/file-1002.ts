export type Thing1002<T> = T extends infer U ? U[] : never;

export const value1002: Thing1002<number> = [1002];
