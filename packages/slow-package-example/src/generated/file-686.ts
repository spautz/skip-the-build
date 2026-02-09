export type Thing686<T> = T extends infer U ? U[] : never;

export const value686: Thing686<number> = [686];
