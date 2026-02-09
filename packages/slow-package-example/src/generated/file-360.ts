export type Thing360<T> = T extends infer U ? U[] : never;

export const value360: Thing360<number> = [360];
