export type Thing1608<T> = T extends infer U ? U[] : never;

export const value1608: Thing1608<number> = [1608];
