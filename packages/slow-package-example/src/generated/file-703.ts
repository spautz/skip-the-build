export type Thing703<T> = T extends infer U ? U[] : never;

export const value703: Thing703<number> = [703];
