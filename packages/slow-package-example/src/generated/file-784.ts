export type Thing784<T> = T extends infer U ? U[] : never;

export const value784: Thing784<number> = [784];
