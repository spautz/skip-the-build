export type Thing700<T> = T extends infer U ? U[] : never;

export const value700: Thing700<number> = [700];
