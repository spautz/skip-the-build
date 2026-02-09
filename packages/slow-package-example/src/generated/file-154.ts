export type Thing154<T> = T extends infer U ? U[] : never;

export const value154: Thing154<number> = [154];
