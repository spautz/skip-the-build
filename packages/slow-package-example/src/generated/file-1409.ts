export type Thing1409<T> = T extends infer U ? U[] : never;

export const value1409: Thing1409<number> = [1409];
