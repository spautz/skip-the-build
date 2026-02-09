export type Thing1448<T> = T extends infer U ? U[] : never;

export const value1448: Thing1448<number> = [1448];
