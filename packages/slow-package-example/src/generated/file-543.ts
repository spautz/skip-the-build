export type Thing543<T> = T extends infer U ? U[] : never;

export const value543: Thing543<number> = [543];
