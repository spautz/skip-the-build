export type Thing693<T> = T extends infer U ? U[] : never;

export const value693: Thing693<number> = [693];
