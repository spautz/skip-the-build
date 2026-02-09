export type Thing1418<T> = T extends infer U ? U[] : never;

export const value1418: Thing1418<number> = [1418];
