export type Thing330<T> = T extends infer U ? U[] : never;

export const value330: Thing330<number> = [330];
