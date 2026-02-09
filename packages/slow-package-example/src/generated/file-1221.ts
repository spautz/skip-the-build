export type Thing1221<T> = T extends infer U ? U[] : never;

export const value1221: Thing1221<number> = [1221];
