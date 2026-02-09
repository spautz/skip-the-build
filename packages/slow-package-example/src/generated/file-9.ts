export type Thing9<T> = T extends infer U ? U[] : never;

export const value9: Thing9<number> = [9];
