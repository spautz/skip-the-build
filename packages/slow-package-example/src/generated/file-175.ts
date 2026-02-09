export type Thing175<T> = T extends infer U ? U[] : never;

export const value175: Thing175<number> = [175];
