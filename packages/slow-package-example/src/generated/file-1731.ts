export type Thing1731<T> = T extends infer U ? U[] : never;

export const value1731: Thing1731<number> = [1731];
