export type Thing1361<T> = T extends infer U ? U[] : never;

export const value1361: Thing1361<number> = [1361];
