export type Thing900<T> = T extends infer U ? U[] : never;

export const value900: Thing900<number> = [900];
