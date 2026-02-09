export type Thing2300<T> = T extends infer U ? U[] : never;

export const value2300: Thing2300<number> = [2300];
