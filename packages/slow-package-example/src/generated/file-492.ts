export type Thing492<T> = T extends infer U ? U[] : never;

export const value492: Thing492<number> = [492];
