export type Thing2987<T> = T extends infer U ? U[] : never;

export const value2987: Thing2987<number> = [2987];
