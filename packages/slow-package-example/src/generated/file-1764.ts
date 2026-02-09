export type Thing1764<T> = T extends infer U ? U[] : never;

export const value1764: Thing1764<number> = [1764];
