export type Thing815<T> = T extends infer U ? U[] : never;

export const value815: Thing815<number> = [815];
