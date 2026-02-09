export type Thing1313<T> = T extends infer U ? U[] : never;

export const value1313: Thing1313<number> = [1313];
