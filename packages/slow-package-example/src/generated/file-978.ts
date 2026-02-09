export type Thing978<T> = T extends infer U ? U[] : never;

export const value978: Thing978<number> = [978];
