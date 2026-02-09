export type Thing882<T> = T extends infer U ? U[] : never;

export const value882: Thing882<number> = [882];
