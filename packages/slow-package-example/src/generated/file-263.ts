export type Thing263<T> = T extends infer U ? U[] : never;

export const value263: Thing263<number> = [263];
