export type Thing787<T> = T extends infer U ? U[] : never;

export const value787: Thing787<number> = [787];
