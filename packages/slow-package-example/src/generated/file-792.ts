export type Thing792<T> = T extends infer U ? U[] : never;

export const value792: Thing792<number> = [792];
