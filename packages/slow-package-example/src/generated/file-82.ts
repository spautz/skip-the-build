export type Thing82<T> = T extends infer U ? U[] : never;

export const value82: Thing82<number> = [82];
