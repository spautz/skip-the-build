export type Thing1616<T> = T extends infer U ? U[] : never;

export const value1616: Thing1616<number> = [1616];
