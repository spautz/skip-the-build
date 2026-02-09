export type Thing1810<T> = T extends infer U ? U[] : never;

export const value1810: Thing1810<number> = [1810];
