export type Thing1611<T> = T extends infer U ? U[] : never;

export const value1611: Thing1611<number> = [1611];
