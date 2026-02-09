export type Thing1560<T> = T extends infer U ? U[] : never;

export const value1560: Thing1560<number> = [1560];
