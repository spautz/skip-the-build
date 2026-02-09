export type Thing606<T> = T extends infer U ? U[] : never;

export const value606: Thing606<number> = [606];
