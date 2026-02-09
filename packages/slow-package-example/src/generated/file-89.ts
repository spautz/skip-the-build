export type Thing89<T> = T extends infer U ? U[] : never;

export const value89: Thing89<number> = [89];
