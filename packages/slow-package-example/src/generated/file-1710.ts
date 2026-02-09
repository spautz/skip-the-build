export type Thing1710<T> = T extends infer U ? U[] : never;

export const value1710: Thing1710<number> = [1710];
