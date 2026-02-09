export type Thing499<T> = T extends infer U ? U[] : never;

export const value499: Thing499<number> = [499];
