export type Thing971<T> = T extends infer U ? U[] : never;

export const value971: Thing971<number> = [971];
