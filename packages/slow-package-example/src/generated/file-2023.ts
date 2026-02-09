export type Thing2023<T> = T extends infer U ? U[] : never;

export const value2023: Thing2023<number> = [2023];
