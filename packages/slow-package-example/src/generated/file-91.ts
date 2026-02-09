export type Thing91<T> = T extends infer U ? U[] : never;

export const value91: Thing91<number> = [91];
