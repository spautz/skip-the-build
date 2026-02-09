export type Thing685<T> = T extends infer U ? U[] : never;

export const value685: Thing685<number> = [685];
