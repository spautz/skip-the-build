export type Thing210<T> = T extends infer U ? U[] : never;

export const value210: Thing210<number> = [210];
