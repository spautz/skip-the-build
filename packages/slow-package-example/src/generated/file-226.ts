export type Thing226<T> = T extends infer U ? U[] : never;

export const value226: Thing226<number> = [226];
