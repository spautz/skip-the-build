export type Thing1340<T> = T extends infer U ? U[] : never;

export const value1340: Thing1340<number> = [1340];
