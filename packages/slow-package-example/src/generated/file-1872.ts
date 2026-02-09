export type Thing1872<T> = T extends infer U ? U[] : never;

export const value1872: Thing1872<number> = [1872];
