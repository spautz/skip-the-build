export type Thing1485<T> = T extends infer U ? U[] : never;

export const value1485: Thing1485<number> = [1485];
