export type Thing313<T> = T extends infer U ? U[] : never;

export const value313: Thing313<number> = [313];
