export type Thing1068<T> = T extends infer U ? U[] : never;

export const value1068: Thing1068<number> = [1068];
