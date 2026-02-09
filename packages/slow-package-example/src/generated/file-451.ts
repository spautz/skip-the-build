export type Thing451<T> = T extends infer U ? U[] : never;

export const value451: Thing451<number> = [451];
