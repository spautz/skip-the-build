export type Thing1588<T> = T extends infer U ? U[] : never;

export const value1588: Thing1588<number> = [1588];
