export type Thing385<T> = T extends infer U ? U[] : never;

export const value385: Thing385<number> = [385];
