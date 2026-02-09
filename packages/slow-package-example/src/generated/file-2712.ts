export type Thing2712<T> = T extends infer U ? U[] : never;

export const value2712: Thing2712<number> = [2712];
