export type Thing702<T> = T extends infer U ? U[] : never;

export const value702: Thing702<number> = [702];
