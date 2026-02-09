export type Thing545<T> = T extends infer U ? U[] : never;

export const value545: Thing545<number> = [545];
