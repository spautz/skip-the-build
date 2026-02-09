export type Thing1724<T> = T extends infer U ? U[] : never;

export const value1724: Thing1724<number> = [1724];
