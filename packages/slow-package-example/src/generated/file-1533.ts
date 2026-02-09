export type Thing1533<T> = T extends infer U ? U[] : never;

export const value1533: Thing1533<number> = [1533];
