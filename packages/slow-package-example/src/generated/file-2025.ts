export type Thing2025<T> = T extends infer U ? U[] : never;

export const value2025: Thing2025<number> = [2025];
