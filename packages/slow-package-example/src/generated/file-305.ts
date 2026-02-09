export type Thing305<T> = T extends infer U ? U[] : never;

export const value305: Thing305<number> = [305];
