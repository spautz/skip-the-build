export type Thing1216<T> = T extends infer U ? U[] : never;

export const value1216: Thing1216<number> = [1216];
