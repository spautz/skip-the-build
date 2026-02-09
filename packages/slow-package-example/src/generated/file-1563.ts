export type Thing1563<T> = T extends infer U ? U[] : never;

export const value1563: Thing1563<number> = [1563];
