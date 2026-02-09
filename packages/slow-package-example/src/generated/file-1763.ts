export type Thing1763<T> = T extends infer U ? U[] : never;

export const value1763: Thing1763<number> = [1763];
