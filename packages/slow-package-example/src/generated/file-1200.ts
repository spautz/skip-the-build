export type Thing1200<T> = T extends infer U ? U[] : never;

export const value1200: Thing1200<number> = [1200];
