export type Thing253<T> = T extends infer U ? U[] : never;

export const value253: Thing253<number> = [253];
