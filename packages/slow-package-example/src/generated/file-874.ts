export type Thing874<T> = T extends infer U ? U[] : never;

export const value874: Thing874<number> = [874];
