export type Thing705<T> = T extends infer U ? U[] : never;

export const value705: Thing705<number> = [705];
