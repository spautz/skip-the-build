export type Thing423<T> = T extends infer U ? U[] : never;

export const value423: Thing423<number> = [423];
