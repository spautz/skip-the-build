export type Thing1094<T> = T extends infer U ? U[] : never;

export const value1094: Thing1094<number> = [1094];
