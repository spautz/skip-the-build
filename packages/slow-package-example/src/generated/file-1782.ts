export type Thing1782<T> = T extends infer U ? U[] : never;

export const value1782: Thing1782<number> = [1782];
