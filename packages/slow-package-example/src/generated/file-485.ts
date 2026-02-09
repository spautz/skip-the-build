export type Thing485<T> = T extends infer U ? U[] : never;

export const value485: Thing485<number> = [485];
