export type Thing408<T> = T extends infer U ? U[] : never;

export const value408: Thing408<number> = [408];
