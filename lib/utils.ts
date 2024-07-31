import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function addCommaSeparator(number: number) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(number) || number < 1000) {
    return number.toFixed(0);
  }

  const numberString = number.toString();
  let result = "";

  for (let i = numberString.length - 1, count = 0; i >= 0; i--, count++) {
    if (count === 3) {
      result = `,${result}`;
      count = 0;
    }
    result = numberString[i] + result;
  }
  return result;
}

export function formatCurrency(value: string) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KES",
  });
  return formatter.format(Number(value));
}

export const sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
