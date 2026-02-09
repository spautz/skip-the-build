export type Thing510<T> = T extends infer U ? U[] : never;

export const value510: Thing510<number> = [510];
