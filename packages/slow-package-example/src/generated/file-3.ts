export type Thing3<T> = T extends infer U ? U[] : never;

export const value3: Thing3<number> = [3];
