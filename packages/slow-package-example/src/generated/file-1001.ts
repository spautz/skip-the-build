export type Thing1001<T> = T extends infer U ? U[] : never;

export const value1001: Thing1001<number> = [1001];
