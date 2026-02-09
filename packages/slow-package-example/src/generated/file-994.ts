export type Thing994<T> = T extends infer U ? U[] : never;

export const value994: Thing994<number> = [994];
