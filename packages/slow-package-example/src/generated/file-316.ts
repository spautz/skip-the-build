export type Thing316<T> = T extends infer U ? U[] : never;

export const value316: Thing316<number> = [316];
