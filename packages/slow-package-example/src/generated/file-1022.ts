export type Thing1022<T> = T extends infer U ? U[] : never;

export const value1022: Thing1022<number> = [1022];
