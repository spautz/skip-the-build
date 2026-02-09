export type Thing889<T> = T extends infer U ? U[] : never;

export const value889: Thing889<number> = [889];
