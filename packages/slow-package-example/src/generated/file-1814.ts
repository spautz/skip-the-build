export type Thing1814<T> = T extends infer U ? U[] : never;

export const value1814: Thing1814<number> = [1814];
