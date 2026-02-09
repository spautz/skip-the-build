export type Thing1450<T> = T extends infer U ? U[] : never;

export const value1450: Thing1450<number> = [1450];
