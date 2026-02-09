export type Thing631<T> = T extends infer U ? U[] : never;

export const value631: Thing631<number> = [631];
