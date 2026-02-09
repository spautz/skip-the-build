export type Thing1833<T> = T extends infer U ? U[] : never;

export const value1833: Thing1833<number> = [1833];
