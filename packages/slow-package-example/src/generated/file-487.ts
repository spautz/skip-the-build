export type Thing487<T> = T extends infer U ? U[] : never;

export const value487: Thing487<number> = [487];
