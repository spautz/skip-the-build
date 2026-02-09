export type Thing1889<T> = T extends infer U ? U[] : never;

export const value1889: Thing1889<number> = [1889];
