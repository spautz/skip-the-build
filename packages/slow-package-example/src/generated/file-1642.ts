export type Thing1642<T> = T extends infer U ? U[] : never;

export const value1642: Thing1642<number> = [1642];
