export type Thing888<T> = T extends infer U ? U[] : never;

export const value888: Thing888<number> = [888];
