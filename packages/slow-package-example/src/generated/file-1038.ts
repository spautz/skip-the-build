export type Thing1038<T> = T extends infer U ? U[] : never;

export const value1038: Thing1038<number> = [1038];
