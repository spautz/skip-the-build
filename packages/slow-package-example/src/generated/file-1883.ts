export type Thing1883<T> = T extends infer U ? U[] : never;

export const value1883: Thing1883<number> = [1883];
