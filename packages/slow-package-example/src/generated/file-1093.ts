export type Thing1093<T> = T extends infer U ? U[] : never;

export const value1093: Thing1093<number> = [1093];
