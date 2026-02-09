export type Thing1984<T> = T extends infer U ? U[] : never;

export const value1984: Thing1984<number> = [1984];
