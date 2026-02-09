export type Thing1496<T> = T extends infer U ? U[] : never;

export const value1496: Thing1496<number> = [1496];
