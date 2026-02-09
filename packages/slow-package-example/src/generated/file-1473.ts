export type Thing1473<T> = T extends infer U ? U[] : never;

export const value1473: Thing1473<number> = [1473];
