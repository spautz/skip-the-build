export type Thing1780<T> = T extends infer U ? U[] : never;

export const value1780: Thing1780<number> = [1780];
