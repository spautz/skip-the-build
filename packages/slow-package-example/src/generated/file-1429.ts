export type Thing1429<T> = T extends infer U ? U[] : never;

export const value1429: Thing1429<number> = [1429];
