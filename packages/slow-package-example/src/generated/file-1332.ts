export type Thing1332<T> = T extends infer U ? U[] : never;

export const value1332: Thing1332<number> = [1332];
