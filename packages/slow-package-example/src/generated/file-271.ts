export type Thing271<T> = T extends infer U ? U[] : never;

export const value271: Thing271<number> = [271];
