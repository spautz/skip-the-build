export type Thing1345<T> = T extends infer U ? U[] : never;

export const value1345: Thing1345<number> = [1345];
