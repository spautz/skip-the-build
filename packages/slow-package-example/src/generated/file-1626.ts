export type Thing1626<T> = T extends infer U ? U[] : never;

export const value1626: Thing1626<number> = [1626];
