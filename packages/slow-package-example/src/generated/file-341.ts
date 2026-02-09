export type Thing341<T> = T extends infer U ? U[] : never;

export const value341: Thing341<number> = [341];
