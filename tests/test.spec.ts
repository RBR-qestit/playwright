import { test, expect } from "@playwright/test";

test.describe("Connection", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");
  });

  test("test", async ({ page }) => {
    await page.getByRole("textbox", { name: "What needs to be done?" }).click();
    await page
      .getByRole("textbox", { name: "What needs to be done?" })
      .fill("Add note");
    await page
      .getByRole("textbox", { name: "What needs to be done?" })
      .press("Enter");
    await expect(page.getByTestId("todo-title")).toContainText("zdfzdfz");
  });
});
