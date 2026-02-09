export type Thing984<T> = T extends infer U ? U[] : never;

export const value984: Thing984<number> = [984];
