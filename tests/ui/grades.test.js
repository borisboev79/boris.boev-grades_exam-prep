const { test, expect } = require('@playwright/test');

test('Check grades page', async ({ page }) => {
    await page.goto('https://boboev-grades.onrender.com/my-grades');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  