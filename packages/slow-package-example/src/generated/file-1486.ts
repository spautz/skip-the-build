export type Thing1486<T> = T extends infer U ? U[] : never;

export const value1486: Thing1486<number> = [1486];
