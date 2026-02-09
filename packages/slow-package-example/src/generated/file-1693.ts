export type Thing1693<T> = T extends infer U ? U[] : never;

export const value1693: Thing1693<number> = [1693];
