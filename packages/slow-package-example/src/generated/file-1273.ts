export type Thing1273<T> = T extends infer U ? U[] : never;

export const value1273: Thing1273<number> = [1273];
