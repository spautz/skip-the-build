export type Thing261<T> = T extends infer U ? U[] : never;

export const value261: Thing261<number> = [261];
