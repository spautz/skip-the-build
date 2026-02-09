export type Thing2611<T> = T extends infer U ? U[] : never;

export const value2611: Thing2611<number> = [2611];
