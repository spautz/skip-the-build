export type Thing1526<T> = T extends infer U ? U[] : never;

export const value1526: Thing1526<number> = [1526];
