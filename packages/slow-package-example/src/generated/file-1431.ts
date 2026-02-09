export type Thing1431<T> = T extends infer U ? U[] : never;

export const value1431: Thing1431<number> = [1431];
