export type Thing212<T> = T extends infer U ? U[] : never;

export const value212: Thing212<number> = [212];
