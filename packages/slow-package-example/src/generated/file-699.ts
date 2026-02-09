export type Thing699<T> = T extends infer U ? U[] : never;

export const value699: Thing699<number> = [699];
