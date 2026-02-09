export type Thing1362<T> = T extends infer U ? U[] : never;

export const value1362: Thing1362<number> = [1362];
