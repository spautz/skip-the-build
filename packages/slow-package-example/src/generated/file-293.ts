export type Thing293<T> = T extends infer U ? U[] : never;

export const value293: Thing293<number> = [293];
