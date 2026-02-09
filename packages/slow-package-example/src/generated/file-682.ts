export type Thing682<T> = T extends infer U ? U[] : never;

export const value682: Thing682<number> = [682];
