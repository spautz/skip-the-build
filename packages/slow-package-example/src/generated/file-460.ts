export type Thing460<T> = T extends infer U ? U[] : never;

export const value460: Thing460<number> = [460];
