export type Thing825<T> = T extends infer U ? U[] : never;

export const value825: Thing825<number> = [825];
