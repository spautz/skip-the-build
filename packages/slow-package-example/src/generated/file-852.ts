export type Thing852<T> = T extends infer U ? U[] : never;

export const value852: Thing852<number> = [852];
