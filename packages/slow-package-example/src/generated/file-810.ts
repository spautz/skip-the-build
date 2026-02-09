export type Thing810<T> = T extends infer U ? U[] : never;

export const value810: Thing810<number> = [810];
