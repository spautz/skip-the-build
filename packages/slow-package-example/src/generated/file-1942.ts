export type Thing1942<T> = T extends infer U ? U[] : never;

export const value1942: Thing1942<number> = [1942];
