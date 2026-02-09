export type Thing532<T> = T extends infer U ? U[] : never;

export const value532: Thing532<number> = [532];
