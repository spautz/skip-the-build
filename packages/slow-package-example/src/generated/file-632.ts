export type Thing632<T> = T extends infer U ? U[] : never;

export const value632: Thing632<number> = [632];
