import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});

test('Search theo Galley code && Galley items', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách checklist chất xếp').click();
    await page.getByRole('textbox', { name: 'Tìm theo Galley code, Galley' }).click();
    await page.getByRole('textbox', { name: 'Tìm theo Galley code, Galley' }).fill('t11');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `Screenshots/search-cxb-Galleycode-successfull.png`, fullPage: true });
    await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.p-2\\.5').click();
    await page.getByRole('textbox', { name: 'Tìm theo Galley code, Galley' }).fill('su');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `Screenshots/search-cxb-Galleyitems-successfull.png`, fullPage: true });
    await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.p-2\\.5').click();
});