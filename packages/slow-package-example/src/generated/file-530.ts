export type Thing530<T> = T extends infer U ? U[] : never;

export const value530: Thing530<number> = [530];
