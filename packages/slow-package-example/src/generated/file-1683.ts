export type Thing1683<T> = T extends infer U ? U[] : never;

export const value1683: Thing1683<number> = [1683];
