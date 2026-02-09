export type Thing1836<T> = T extends infer U ? U[] : never;

export const value1836: Thing1836<number> = [1836];
