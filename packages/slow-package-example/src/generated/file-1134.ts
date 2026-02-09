export type Thing1134<T> = T extends infer U ? U[] : never;

export const value1134: Thing1134<number> = [1134];
