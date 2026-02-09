export type Thing535<T> = T extends infer U ? U[] : never;

export const value535: Thing535<number> = [535];
