export type Thing200<T> = T extends infer U ? U[] : never;

export const value200: Thing200<number> = [200];
