export type Thing262<T> = T extends infer U ? U[] : never;

export const value262: Thing262<number> = [262];
