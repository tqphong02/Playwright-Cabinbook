import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});

test('Search list flight', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    // await page.pause();
    await page.getByText('Danh sách chuyến bay').nth(1).click();
    await page.getByRole('textbox', { name: 'Số hiệu CB, Chặng bay,' }).click();
    await page.getByRole('textbox', { name: 'Số hiệu CB, Chặng bay,' }).fill('vn129');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `Screenshots/searchChuyenB-galley-successfull.png`, fullPage: true });
    await page.locator('button').nth(4).click();
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/cxb/flights?keyword=sf');
    await page.getByRole('textbox', { name: 'Số hiệu CB, Chặng bay,' }).fill('sfo-sgn');
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/cxb/flights?keyword=sfo-sgn');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `Screenshots/searchChangB-galley-successfull.png`, fullPage: true });
    await page.locator('button').nth(4).click();
    await page.getByRole('textbox', { name: 'Số hiệu CB, Chặng bay,' }).fill('321 - ');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `Screenshots/searchAircraft-galley-successfull.png`, fullPage: true });
});