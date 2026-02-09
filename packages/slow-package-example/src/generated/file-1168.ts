export type Thing1168<T> = T extends infer U ? U[] : never;

export const value1168: Thing1168<number> = [1168];
