export type Thing1238<T> = T extends infer U ? U[] : never;

export const value1238: Thing1238<number> = [1238];
