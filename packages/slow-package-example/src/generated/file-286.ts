export type Thing286<T> = T extends infer U ? U[] : never;

export const value286: Thing286<number> = [286];
