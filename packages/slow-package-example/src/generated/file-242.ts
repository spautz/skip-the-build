export type Thing242<T> = T extends infer U ? U[] : never;

export const value242: Thing242<number> = [242];
