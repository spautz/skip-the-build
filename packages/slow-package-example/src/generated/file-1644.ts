export type Thing1644<T> = T extends infer U ? U[] : never;

export const value1644: Thing1644<number> = [1644];
