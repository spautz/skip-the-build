export type Thing1856<T> = T extends infer U ? U[] : never;

export const value1856: Thing1856<number> = [1856];
