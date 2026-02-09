export type Thing1792<T> = T extends infer U ? U[] : never;

export const value1792: Thing1792<number> = [1792];
