export type Thing339<T> = T extends infer U ? U[] : never;

export const value339: Thing339<number> = [339];
