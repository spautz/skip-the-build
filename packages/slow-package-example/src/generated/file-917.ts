export type Thing917<T> = T extends infer U ? U[] : never;

export const value917: Thing917<number> = [917];
