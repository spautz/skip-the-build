export type Thing839<T> = T extends infer U ? U[] : never;

export const value839: Thing839<number> = [839];
