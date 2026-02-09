export type Thing1996<T> = T extends infer U ? U[] : never;

export const value1996: Thing1996<number> = [1996];
