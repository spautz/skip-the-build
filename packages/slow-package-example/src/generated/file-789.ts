export type Thing789<T> = T extends infer U ? U[] : never;

export const value789: Thing789<number> = [789];
