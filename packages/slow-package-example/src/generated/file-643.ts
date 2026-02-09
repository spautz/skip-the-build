export type Thing643<T> = T extends infer U ? U[] : never;

export const value643: Thing643<number> = [643];
