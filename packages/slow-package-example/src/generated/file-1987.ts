export type Thing1987<T> = T extends infer U ? U[] : never;

export const value1987: Thing1987<number> = [1987];
