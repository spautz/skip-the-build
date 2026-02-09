export type Thing1805<T> = T extends infer U ? U[] : never;

export const value1805: Thing1805<number> = [1805];
