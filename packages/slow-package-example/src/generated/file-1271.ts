export type Thing1271<T> = T extends infer U ? U[] : never;

export const value1271: Thing1271<number> = [1271];
