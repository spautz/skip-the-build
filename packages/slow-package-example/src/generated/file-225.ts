export type Thing225<T> = T extends infer U ? U[] : never;

export const value225: Thing225<number> = [225];
