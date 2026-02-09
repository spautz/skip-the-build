export type Thing1515<T> = T extends infer U ? U[] : never;

export const value1515: Thing1515<number> = [1515];
