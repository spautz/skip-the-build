export type Thing644<T> = T extends infer U ? U[] : never;

export const value644: Thing644<number> = [644];
