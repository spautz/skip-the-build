export type Thing1979<T> = T extends infer U ? U[] : never;

export const value1979: Thing1979<number> = [1979];
