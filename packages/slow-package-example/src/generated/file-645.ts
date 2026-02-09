export type Thing645<T> = T extends infer U ? U[] : never;

export const value645: Thing645<number> = [645];
