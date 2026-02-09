export type Thing76<T> = T extends infer U ? U[] : never;

export const value76: Thing76<number> = [76];
