export type Thing901<T> = T extends infer U ? U[] : never;

export const value901: Thing901<number> = [901];
