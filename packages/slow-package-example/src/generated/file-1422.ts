export type Thing1422<T> = T extends infer U ? U[] : never;

export const value1422: Thing1422<number> = [1422];
