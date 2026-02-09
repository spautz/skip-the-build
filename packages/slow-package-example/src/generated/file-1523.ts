export type Thing1523<T> = T extends infer U ? U[] : never;

export const value1523: Thing1523<number> = [1523];
