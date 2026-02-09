export type Thing213<T> = T extends infer U ? U[] : never;

export const value213: Thing213<number> = [213];
