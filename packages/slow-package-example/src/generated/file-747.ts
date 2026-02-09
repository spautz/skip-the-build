export type Thing747<T> = T extends infer U ? U[] : never;

export const value747: Thing747<number> = [747];
