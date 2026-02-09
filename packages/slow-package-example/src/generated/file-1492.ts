export type Thing1492<T> = T extends infer U ? U[] : never;

export const value1492: Thing1492<number> = [1492];
