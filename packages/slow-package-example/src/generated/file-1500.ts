export type Thing1500<T> = T extends infer U ? U[] : never;

export const value1500: Thing1500<number> = [1500];
