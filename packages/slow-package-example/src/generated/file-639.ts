export type Thing639<T> = T extends infer U ? U[] : never;

export const value639: Thing639<number> = [639];
