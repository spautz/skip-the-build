export type Thing37<T> = T extends infer U ? U[] : never;

export const value37: Thing37<number> = [37];
