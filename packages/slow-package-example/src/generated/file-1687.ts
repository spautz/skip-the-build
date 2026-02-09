export type Thing1687<T> = T extends infer U ? U[] : never;

export const value1687: Thing1687<number> = [1687];
