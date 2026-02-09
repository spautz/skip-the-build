export type Thing1072<T> = T extends infer U ? U[] : never;

export const value1072: Thing1072<number> = [1072];
