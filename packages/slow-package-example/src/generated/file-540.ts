export type Thing540<T> = T extends infer U ? U[] : never;

export const value540: Thing540<number> = [540];
