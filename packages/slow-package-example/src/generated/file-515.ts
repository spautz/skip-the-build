export type Thing515<T> = T extends infer U ? U[] : never;

export const value515: Thing515<number> = [515];
