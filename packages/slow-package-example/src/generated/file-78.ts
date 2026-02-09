export type Thing78<T> = T extends infer U ? U[] : never;

export const value78: Thing78<number> = [78];
