export type Thing1680<T> = T extends infer U ? U[] : never;

export const value1680: Thing1680<number> = [1680];
