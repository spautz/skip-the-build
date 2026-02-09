export type Thing2683<T> = T extends infer U ? U[] : never;

export const value2683: Thing2683<number> = [2683];
