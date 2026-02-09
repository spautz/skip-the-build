export type Thing331<T> = T extends infer U ? U[] : never;

export const value331: Thing331<number> = [331];
