export type Thing1567<T> = T extends infer U ? U[] : never;

export const value1567: Thing1567<number> = [1567];
