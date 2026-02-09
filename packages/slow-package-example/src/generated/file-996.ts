export type Thing996<T> = T extends infer U ? U[] : never;

export const value996: Thing996<number> = [996];
