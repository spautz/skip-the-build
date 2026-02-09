export type Thing1416<T> = T extends infer U ? U[] : never;

export const value1416: Thing1416<number> = [1416];
