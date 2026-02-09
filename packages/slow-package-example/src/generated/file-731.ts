export type Thing731<T> = T extends infer U ? U[] : never;

export const value731: Thing731<number> = [731];
