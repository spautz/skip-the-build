export type Thing683<T> = T extends infer U ? U[] : never;

export const value683: Thing683<number> = [683];
