export type Thing946<T> = T extends infer U ? U[] : never;

export const value946: Thing946<number> = [946];
