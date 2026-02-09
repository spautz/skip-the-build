export type Thing94<T> = T extends infer U ? U[] : never;

export const value94: Thing94<number> = [94];
