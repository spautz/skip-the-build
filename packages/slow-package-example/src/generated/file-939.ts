export type Thing939<T> = T extends infer U ? U[] : never;

export const value939: Thing939<number> = [939];
