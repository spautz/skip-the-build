export type Thing767<T> = T extends infer U ? U[] : never;

export const value767: Thing767<number> = [767];
