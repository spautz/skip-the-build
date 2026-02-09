export type Thing411<T> = T extends infer U ? U[] : never;

export const value411: Thing411<number> = [411];
