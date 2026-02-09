export type Thing235<T> = T extends infer U ? U[] : never;

export const value235: Thing235<number> = [235];
