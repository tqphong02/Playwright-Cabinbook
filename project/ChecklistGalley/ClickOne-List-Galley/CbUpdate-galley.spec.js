import { test, expect } from '@playwright/test';


test.use({
    storageState: 'auth/storageState.json',
});
//đổi thông tin 
test('Update Galley', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách sơ đồ Galley').click();
    await page.getByRole('cell', { name: 'A350-29C/36I/240Y-35B' }).first().click();
    await page.pause();
    await page.getByRole('tab', { name: 'Galley' }).click();
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
    await page.getByRole('region').filter({ hasText: 'Su57Waste Mô tả' }).getByRole('img').click();
    await page.locator('.MuiBackdrop-root').click();
    await page.getByRole('region').filter({ hasText: 'Su57Waste Mô tả' }).getByRole('img').click();
    await page.locator('.MuiBackdrop-root').click();
    await page.locator('.grid-stack-item').first().click();;
    await page.locator('.MuiBackdrop-root').click();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await page.getByRole('button', { name: 'Rear Galley' }).click();
    await page.getByRole('button', { name: 'Rear Galley' }).click();

});