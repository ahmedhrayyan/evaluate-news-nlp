import { checkForName } from "../js/nameChecker";

test("Testing the checkForName() function", () => {
  expect(checkForName).toBeDefined();
  expect(typeof checkForName === "function").toBeTruthy();
});
