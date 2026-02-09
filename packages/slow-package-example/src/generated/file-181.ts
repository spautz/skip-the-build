export type Thing181<T> = T extends infer U ? U[] : never;

export const value181: Thing181<number> = [181];
