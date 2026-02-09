export type Thing1053<T> = T extends infer U ? U[] : never;

export const value1053: Thing1053<number> = [1053];
