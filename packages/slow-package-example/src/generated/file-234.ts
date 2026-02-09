export type Thing234<T> = T extends infer U ? U[] : never;

export const value234: Thing234<number> = [234];
