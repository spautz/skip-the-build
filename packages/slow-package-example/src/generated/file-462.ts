export type Thing462<T> = T extends infer U ? U[] : never;

export const value462: Thing462<number> = [462];
