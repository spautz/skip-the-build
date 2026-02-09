export type Thing895<T> = T extends infer U ? U[] : never;

export const value895: Thing895<number> = [895];
