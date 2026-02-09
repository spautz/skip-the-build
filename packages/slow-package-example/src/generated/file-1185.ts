export type Thing1185<T> = T extends infer U ? U[] : never;

export const value1185: Thing1185<number> = [1185];
