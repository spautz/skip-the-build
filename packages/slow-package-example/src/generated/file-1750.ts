export type Thing1750<T> = T extends infer U ? U[] : never;

export const value1750: Thing1750<number> = [1750];
