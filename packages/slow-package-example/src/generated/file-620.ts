export type Thing620<T> = T extends infer U ? U[] : never;

export const value620: Thing620<number> = [620];
