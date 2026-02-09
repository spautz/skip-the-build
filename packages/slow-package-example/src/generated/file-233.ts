export type Thing233<T> = T extends infer U ? U[] : never;

export const value233: Thing233<number> = [233];
