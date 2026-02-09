export type Thing1572<T> = T extends infer U ? U[] : never;

export const value1572: Thing1572<number> = [1572];
