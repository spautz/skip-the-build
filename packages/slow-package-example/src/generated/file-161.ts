export type Thing161<T> = T extends infer U ? U[] : never;

export const value161: Thing161<number> = [161];
