export type Thing910<T> = T extends infer U ? U[] : never;

export const value910: Thing910<number> = [910];
