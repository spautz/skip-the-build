export type Thing128<T> = T extends infer U ? U[] : never;

export const value128: Thing128<number> = [128];
