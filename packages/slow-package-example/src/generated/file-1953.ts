export type Thing1953<T> = T extends infer U ? U[] : never;

export const value1953: Thing1953<number> = [1953];
