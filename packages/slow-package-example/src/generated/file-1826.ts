export type Thing1826<T> = T extends infer U ? U[] : never;

export const value1826: Thing1826<number> = [1826];
