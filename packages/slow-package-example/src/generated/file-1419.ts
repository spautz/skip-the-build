export type Thing1419<T> = T extends infer U ? U[] : never;

export const value1419: Thing1419<number> = [1419];
