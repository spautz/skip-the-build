export type Thing783<T> = T extends infer U ? U[] : never;

export const value783: Thing783<number> = [783];
