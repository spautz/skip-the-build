export type Thing761<T> = T extends infer U ? U[] : never;

export const value761: Thing761<number> = [761];
