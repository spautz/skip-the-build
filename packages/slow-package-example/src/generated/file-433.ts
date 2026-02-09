export type Thing433<T> = T extends infer U ? U[] : never;

export const value433: Thing433<number> = [433];
