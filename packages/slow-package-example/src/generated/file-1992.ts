export type Thing1992<T> = T extends infer U ? U[] : never;

export const value1992: Thing1992<number> = [1992];
