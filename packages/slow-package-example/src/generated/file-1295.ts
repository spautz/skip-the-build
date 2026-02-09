export type Thing1295<T> = T extends infer U ? U[] : never;

export const value1295: Thing1295<number> = [1295];
