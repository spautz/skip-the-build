export type Thing429<T> = T extends infer U ? U[] : never;

export const value429: Thing429<number> = [429];
