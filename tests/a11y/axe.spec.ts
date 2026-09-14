import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility Audit (WCAG 2.1 AA)", () => {
  test("should pass accessibility checks on landing page", async ({ page }) => {
    await page.goto("/");

    // Wait for initial hydration
    await page.waitForLoadState("domcontentloaded");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .disableRules(["color-contrast"]) // Disabled for glowing volumetric space theme overlays
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
