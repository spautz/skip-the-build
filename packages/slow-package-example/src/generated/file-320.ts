export type Thing320<T> = T extends infer U ? U[] : never;

export const value320: Thing320<number> = [320];
