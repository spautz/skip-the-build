export type Thing312<T> = T extends infer U ? U[] : never;

export const value312: Thing312<number> = [312];
