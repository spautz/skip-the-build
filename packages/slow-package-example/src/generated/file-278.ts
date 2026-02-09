export type Thing278<T> = T extends infer U ? U[] : never;

export const value278: Thing278<number> = [278];
