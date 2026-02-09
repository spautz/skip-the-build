export type Thing511<T> = T extends infer U ? U[] : never;

export const value511: Thing511<number> = [511];
