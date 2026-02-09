export type Thing811<T> = T extends infer U ? U[] : never;

export const value811: Thing811<number> = [811];
