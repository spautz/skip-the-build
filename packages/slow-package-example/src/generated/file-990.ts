export type Thing990<T> = T extends infer U ? U[] : never;

export const value990: Thing990<number> = [990];
