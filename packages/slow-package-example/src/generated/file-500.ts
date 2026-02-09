export type Thing500<T> = T extends infer U ? U[] : never;

export const value500: Thing500<number> = [500];
