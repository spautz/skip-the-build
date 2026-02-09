export type Thing2708<T> = T extends infer U ? U[] : never;

export const value2708: Thing2708<number> = [2708];
