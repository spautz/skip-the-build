export type Thing1801<T> = T extends infer U ? U[] : never;

export const value1801: Thing1801<number> = [1801];
