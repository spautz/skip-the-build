export type Thing25<T> = T extends infer U ? U[] : never;

export const value25: Thing25<number> = [25];
