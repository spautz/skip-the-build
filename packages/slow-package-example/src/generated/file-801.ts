export type Thing801<T> = T extends infer U ? U[] : never;

export const value801: Thing801<number> = [801];
