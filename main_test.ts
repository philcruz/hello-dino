import { greet } from "./main.ts";
import { assertEquals } from "https://deno.land/std@0.206.0/testing/asserts.ts";

Deno.test("greeting test", () => {
  const result = greet("Deno");
  assertEquals(result, "Hello, Deno!");
});
