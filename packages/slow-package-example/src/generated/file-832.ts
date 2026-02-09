export type Thing832<T> = T extends infer U ? U[] : never;

export const value832: Thing832<number> = [832];
