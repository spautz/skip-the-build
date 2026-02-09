export type Thing1930<T> = T extends infer U ? U[] : never;

export const value1930: Thing1930<number> = [1930];
