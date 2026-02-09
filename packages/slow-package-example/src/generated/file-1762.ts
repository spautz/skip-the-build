export type Thing1762<T> = T extends infer U ? U[] : never;

export const value1762: Thing1762<number> = [1762];
