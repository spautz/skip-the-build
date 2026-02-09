export type Thing1522<T> = T extends infer U ? U[] : never;

export const value1522: Thing1522<number> = [1522];
