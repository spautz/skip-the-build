export type Thing2710<T> = T extends infer U ? U[] : never;

export const value2710: Thing2710<number> = [2710];
