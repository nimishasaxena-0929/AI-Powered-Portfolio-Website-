import { test, expect } from "@playwright/test";

test.describe("Nimisha Saxena Portfolio E2E Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render Nimisha Saxena headline and role title", async ({ page }) => {
    await expect(page.getByText("Nimisha Saxena").first()).toBeVisible();
    await expect(page.getByText("Full Stack Developer & AI Integration").first()).toBeVisible();
  });

  test("should navigate to projects section using navbar links", async ({ page }) => {
    await page.getByRole("link", { name: "Projects" }).first().click();
    await expect(page.locator("#projects")).toBeInViewport();

    await page.getByRole("link", { name: "AI Lab" }).first().click();
    await expect(page.locator("#ai-lab")).toBeInViewport();
  });

  test("should open project case study modal", async ({ page }) => {
    const caseStudyBtn = page.getByRole("button", { name: /Architecture & Case Study/i }).first();
    await caseStudyBtn.click();
    await expect(page.getByText("Engineering Problem")).toBeVisible();
    await expect(page.getByText("Technical Solution")).toBeVisible();
  });

  test("should interact with Gemini AI Chatbot", async ({ page }) => {
    const promptBtn = page.getByRole("button", { name: /What projects has Nimisha built\?/i });
    await promptBtn.click();
    await expect(page.getByText("Gemini 2.5 is formulating response...")).toBeVisible();
    await expect(page.getByText(/Nimisha has built 3 flagship engineering projects/i)).toBeVisible({ timeout: 10000 });
  });
});
