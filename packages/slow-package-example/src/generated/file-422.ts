export type Thing422<T> = T extends infer U ? U[] : never;

export const value422: Thing422<number> = [422];
