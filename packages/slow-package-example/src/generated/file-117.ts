export type Thing117<T> = T extends infer U ? U[] : never;

export const value117: Thing117<number> = [117];
