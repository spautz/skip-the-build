export type Thing782<T> = T extends infer U ? U[] : never;

export const value782: Thing782<number> = [782];
