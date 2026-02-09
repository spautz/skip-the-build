export type Thing1636<T> = T extends infer U ? U[] : never;

export const value1636: Thing1636<number> = [1636];
