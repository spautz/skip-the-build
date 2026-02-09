export type Thing800<T> = T extends infer U ? U[] : never;

export const value800: Thing800<number> = [800];
