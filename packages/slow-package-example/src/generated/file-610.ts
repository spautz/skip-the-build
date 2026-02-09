export type Thing610<T> = T extends infer U ? U[] : never;

export const value610: Thing610<number> = [610];
