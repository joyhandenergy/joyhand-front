import { test, expect } from '@playwright/test';

test.describe('JoyHand Energy Core Functionality', () => {

  test('homepage loads and displays correct metadata', async ({ page }) => {
    await page.goto('/');
    
    // Check for the primary brand title
    await expect(page).toHaveTitle(/JoyHand Manufacturer/);
    
    // Verify the hero section loads (H1 tag)
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });

  test('contact form is visible and interactive on the contact page', async ({ page }) => {
    await page.goto('/contact-us');
    
    // Verify the contact form section renders
    const formSection = page.locator('.contact-form-section');
    await expect(formSection).toBeVisible();

    // Verify key input fields exist
    await expect(page.locator('input[name="firstName"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();

    // Verify the submit button exists
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();
  });

  test('product catalog navigation works', async ({ page }) => {
    await page.goto('/products');
    
    // Check that the products page loaded
    await expect(page).toHaveTitle(/Products/i);
    
    // Click on the first product link
    const firstProduct = page.locator('.product-card__inner').first();
    await expect(firstProduct).toBeVisible();
    await firstProduct.click();
    
    // Ensure we navigated to a product details page
    await expect(page).toHaveURL(/\/products\/.+/);
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('header navigation links work correctly', async ({ page }) => {
    await page.goto('/');
    
    // Click the Manufacturing link
    const manufacturingLink = page.locator('.header__nav a:has-text("Manufacturing")');
    await expect(manufacturingLink).toBeVisible();
    await manufacturingLink.click();
    
    // Verify it navigates correctly
    await expect(page).toHaveURL(/\/manufacturing/);
    await expect(page.locator('h1').first()).toContainText('Manufacturing');
  });

});
