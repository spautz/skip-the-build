export type Thing925<T> = T extends infer U ? U[] : never;

export const value925: Thing925<number> = [925];
