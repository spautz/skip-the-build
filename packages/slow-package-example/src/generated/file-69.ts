export type Thing69<T> = T extends infer U ? U[] : never;

export const value69: Thing69<number> = [69];
