export type Thing1952<T> = T extends infer U ? U[] : never;

export const value1952: Thing1952<number> = [1952];
