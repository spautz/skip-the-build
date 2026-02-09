export type Thing1455<T> = T extends infer U ? U[] : never;

export const value1455: Thing1455<number> = [1455];
