export type Thing443<T> = T extends infer U ? U[] : never;

export const value443: Thing443<number> = [443];
