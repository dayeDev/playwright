import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.naver.com/");
  await page.getByRole("searchbox", { name: "검색어를 입력해 주세요" }).click();
  await page.getByRole("searchbox", { name: "검색어를 입력해 주세요" }).click();
  await page
    .getByRole("searchbox", { name: "검색어를 입력해 주세요" })
    .fill("x");
  await page
    .getByRole("searchbox", { name: "검색어를 입력해 주세요" })
    .press("CapsLock");
  await page
    .getByRole("searchbox", { name: "검색어를 입력해 주세요" })
    .fill("테스트");
  await page
    .getByRole("searchbox", { name: "검색어를 입력해 주세요" })
    .press("Enter");
  await page
    .getByRole("searchbox", { name: "검색어를 입력해 주세요" })
    .fill("테스트");
  await page.getByRole("searchbox", { name: "검색어를 입력해 주세요" }).click();
  await page.getByRole("button", { name: "검색", exact: true }).click();
});
