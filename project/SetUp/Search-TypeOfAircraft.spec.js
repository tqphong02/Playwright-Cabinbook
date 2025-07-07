import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});

test('Tìm kiếm loại tàu bay', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    // await page.pause();
    await page.getByRole('button', { name: 'Loại tàu bay' }).click();
    await page.getByRole('textbox', { name: 'Tìm theo Aircraft type,' }).click();
    await page.getByRole('textbox', { name: 'Tìm theo Aircraft type,' }).fill('he');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `Screenshots/searchAircraftType-successfull.png`, fullPage: true });
    await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.p-2\\.5').click();
    await page.getByRole('textbox', { name: 'Tìm theo Aircraft type,' }).fill('hu');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `Screenshots/searchRegistration-successfull.png`, fullPage: true });
    await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.p-2\\.5').click();

});