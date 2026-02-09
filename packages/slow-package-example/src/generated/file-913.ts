export type Thing913<T> = T extends infer U ? U[] : never;

export const value913: Thing913<number> = [913];
