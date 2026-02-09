export type Thing246<T> = T extends infer U ? U[] : never;

export const value246: Thing246<number> = [246];
