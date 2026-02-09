export type Thing563<T> = T extends infer U ? U[] : never;

export const value563: Thing563<number> = [563];
