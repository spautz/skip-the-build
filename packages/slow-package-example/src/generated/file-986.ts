export type Thing986<T> = T extends infer U ? U[] : never;

export const value986: Thing986<number> = [986];
