export type Thing958<T> = T extends infer U ? U[] : never;

export const value958: Thing958<number> = [958];
