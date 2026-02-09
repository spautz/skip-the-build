export type Thing899<T> = T extends infer U ? U[] : never;

export const value899: Thing899<number> = [899];
