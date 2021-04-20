import { analyze } from "../js/api";

test("Testing the analyze() function", () => {
  expect(analyze).toBeDefined();
  expect(typeof analyze === "function").toBeTruthy();
});
