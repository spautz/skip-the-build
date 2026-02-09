export type Thing333<T> = T extends infer U ? U[] : never;

export const value333: Thing333<number> = [333];
