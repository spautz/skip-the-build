export type Thing805<T> = T extends infer U ? U[] : never;

export const value805: Thing805<number> = [805];
