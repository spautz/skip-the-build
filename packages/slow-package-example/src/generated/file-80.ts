export type Thing80<T> = T extends infer U ? U[] : never;

export const value80: Thing80<number> = [80];
