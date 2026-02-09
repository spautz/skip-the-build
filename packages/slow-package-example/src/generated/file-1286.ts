export type Thing1286<T> = T extends infer U ? U[] : never;

export const value1286: Thing1286<number> = [1286];
