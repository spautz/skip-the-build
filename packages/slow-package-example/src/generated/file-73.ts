export type Thing73<T> = T extends infer U ? U[] : never;

export const value73: Thing73<number> = [73];
