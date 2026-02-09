export type Thing85<T> = T extends infer U ? U[] : never;

export const value85: Thing85<number> = [85];
