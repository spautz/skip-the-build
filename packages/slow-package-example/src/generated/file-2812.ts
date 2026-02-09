export type Thing2812<T> = T extends infer U ? U[] : never;

export const value2812: Thing2812<number> = [2812];
