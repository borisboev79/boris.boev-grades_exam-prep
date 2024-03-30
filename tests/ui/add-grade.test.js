const { test, expect } = require('@playwright/test');

test('Check add grades page', async ({ page }) => {
    await page.goto('https://boboev-grades.onrender.com/add-grade');
    const form = await page.$('input');
    expect(form).toBeTruthy();
  });
  