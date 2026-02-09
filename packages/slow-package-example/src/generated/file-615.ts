export type Thing615<T> = T extends infer U ? U[] : never;

export const value615: Thing615<number> = [615];
