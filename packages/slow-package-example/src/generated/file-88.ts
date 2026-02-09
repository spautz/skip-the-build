export type Thing88<T> = T extends infer U ? U[] : never;

export const value88: Thing88<number> = [88];
