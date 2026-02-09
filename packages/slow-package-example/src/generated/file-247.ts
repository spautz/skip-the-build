export type Thing247<T> = T extends infer U ? U[] : never;

export const value247: Thing247<number> = [247];
