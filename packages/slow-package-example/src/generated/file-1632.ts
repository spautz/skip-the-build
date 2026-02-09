export type Thing1632<T> = T extends infer U ? U[] : never;

export const value1632: Thing1632<number> = [1632];
