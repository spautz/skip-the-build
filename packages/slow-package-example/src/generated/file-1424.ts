export type Thing1424<T> = T extends infer U ? U[] : never;

export const value1424: Thing1424<number> = [1424];
