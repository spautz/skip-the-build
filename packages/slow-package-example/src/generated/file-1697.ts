export type Thing1697<T> = T extends infer U ? U[] : never;

export const value1697: Thing1697<number> = [1697];
