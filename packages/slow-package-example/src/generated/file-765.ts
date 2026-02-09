export type Thing765<T> = T extends infer U ? U[] : never;

export const value765: Thing765<number> = [765];
