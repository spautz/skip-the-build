export type Thing1658<T> = T extends infer U ? U[] : never;

export const value1658: Thing1658<number> = [1658];
