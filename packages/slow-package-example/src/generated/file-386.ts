export type Thing386<T> = T extends infer U ? U[] : never;

export const value386: Thing386<number> = [386];
