export type Thing414<T> = T extends infer U ? U[] : never;

export const value414: Thing414<number> = [414];
