export type Thing1544<T> = T extends infer U ? U[] : never;

export const value1544: Thing1544<number> = [1544];
