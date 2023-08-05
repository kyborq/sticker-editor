type TClassName = string | boolean | undefined | null | number;

export const classNames = (...args: TClassName[]) => {
  return args
    .filter((a) => !!a)
    .map((a) => a)
    .join(" ");
};
