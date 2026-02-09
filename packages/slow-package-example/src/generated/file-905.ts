export type Thing905<T> = T extends infer U ? U[] : never;

export const value905: Thing905<number> = [905];
