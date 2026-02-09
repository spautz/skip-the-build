export type Thing710<T> = T extends infer U ? U[] : never;

export const value710: Thing710<number> = [710];
