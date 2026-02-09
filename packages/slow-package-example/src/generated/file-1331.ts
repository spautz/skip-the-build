export type Thing1331<T> = T extends infer U ? U[] : never;

export const value1331: Thing1331<number> = [1331];
