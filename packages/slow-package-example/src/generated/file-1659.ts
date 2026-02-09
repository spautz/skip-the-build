export type Thing1659<T> = T extends infer U ? U[] : never;

export const value1659: Thing1659<number> = [1659];
