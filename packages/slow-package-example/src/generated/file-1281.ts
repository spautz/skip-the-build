export type Thing1281<T> = T extends infer U ? U[] : never;

export const value1281: Thing1281<number> = [1281];
