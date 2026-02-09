export type Thing103<T> = T extends infer U ? U[] : never;

export const value103: Thing103<number> = [103];
