export type Thing1906<T> = T extends infer U ? U[] : never;

export const value1906: Thing1906<number> = [1906];
