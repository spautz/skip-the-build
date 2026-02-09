export type Thing1816<T> = T extends infer U ? U[] : never;

export const value1816: Thing1816<number> = [1816];
