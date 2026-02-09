export type Thing403<T> = T extends infer U ? U[] : never;

export const value403: Thing403<number> = [403];
