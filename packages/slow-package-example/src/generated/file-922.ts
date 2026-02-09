export type Thing922<T> = T extends infer U ? U[] : never;

export const value922: Thing922<number> = [922];
