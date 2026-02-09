export type Thing1712<T> = T extends infer U ? U[] : never;

export const value1712: Thing1712<number> = [1712];
