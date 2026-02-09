export type Thing981<T> = T extends infer U ? U[] : never;

export const value981: Thing981<number> = [981];
