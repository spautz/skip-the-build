export type Thing995<T> = T extends infer U ? U[] : never;

export const value995: Thing995<number> = [995];
