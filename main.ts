import { format } from "https://deno.land/std@0.206.0/datetime/mod.ts";

const today = new Date();
console.log("Hello, Deno 2!");
console.log(format(today, "yyyy-MM-dd"));

export const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("Phil"));
