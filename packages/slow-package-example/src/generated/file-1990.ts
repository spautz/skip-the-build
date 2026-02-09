export type Thing1990<T> = T extends infer U ? U[] : never;

export const value1990: Thing1990<number> = [1990];
