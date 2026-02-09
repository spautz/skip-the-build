export type Thing1118<T> = T extends infer U ? U[] : never;

export const value1118: Thing1118<number> = [1118];
