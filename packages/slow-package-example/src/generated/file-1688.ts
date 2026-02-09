export type Thing1688<T> = T extends infer U ? U[] : never;

export const value1688: Thing1688<number> = [1688];
