export type Thing62<T> = T extends infer U ? U[] : never;

export const value62: Thing62<number> = [62];
