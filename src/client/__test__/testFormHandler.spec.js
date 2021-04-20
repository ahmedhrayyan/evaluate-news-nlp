import { handleSubmit } from "../js/formHandler";

test("Testing the handleSubmit() function", () => {
  expect(handleSubmit).toBeDefined();
  expect(typeof handleSubmit === "function").toBeTruthy();
});
