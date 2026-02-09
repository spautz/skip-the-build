export type Thing1510<T> = T extends infer U ? U[] : never;

export const value1510: Thing1510<number> = [1510];
