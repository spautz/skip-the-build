export type Thing525<T> = T extends infer U ? U[] : never;

export const value525: Thing525<number> = [525];
