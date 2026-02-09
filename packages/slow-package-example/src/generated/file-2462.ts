export type Thing2462<T> = T extends infer U ? U[] : never;

export const value2462: Thing2462<number> = [2462];
