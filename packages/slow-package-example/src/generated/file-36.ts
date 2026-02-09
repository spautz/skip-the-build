export type Thing36<T> = T extends infer U ? U[] : never;

export const value36: Thing36<number> = [36];
