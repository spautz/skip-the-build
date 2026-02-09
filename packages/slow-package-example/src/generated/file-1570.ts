export type Thing1570<T> = T extends infer U ? U[] : never;

export const value1570: Thing1570<number> = [1570];
