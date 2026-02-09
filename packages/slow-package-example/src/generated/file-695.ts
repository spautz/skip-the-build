export type Thing695<T> = T extends infer U ? U[] : never;

export const value695: Thing695<number> = [695];
