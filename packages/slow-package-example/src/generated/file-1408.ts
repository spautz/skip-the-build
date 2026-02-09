export type Thing1408<T> = T extends infer U ? U[] : never;

export const value1408: Thing1408<number> = [1408];
