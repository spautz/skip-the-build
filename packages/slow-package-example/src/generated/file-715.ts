export type Thing715<T> = T extends infer U ? U[] : never;

export const value715: Thing715<number> = [715];
