export type Thing1204<T> = T extends infer U ? U[] : never;

export const value1204: Thing1204<number> = [1204];
