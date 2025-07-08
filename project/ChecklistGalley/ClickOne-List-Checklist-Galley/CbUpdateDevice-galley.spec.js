import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});
//đổi thông tin 
test('Chỉnh sửa checklist thiết bị Galley', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách sơ đồ Galley').click();
    await page.getByRole('cell', { name: 'A350-29C/36I/240Y-35B' }).first().click();
    // await page.pause();
    await page.getByRole('checkbox', { name: '1 b72 spririt Water Boiler' }).getByLabel('Cập nhật').click();
    await page.locator('div').filter({ hasText: /^Galley Position$/ }).getByLabel('Open').click();
    await page.getByRole('option', { name: 'Rear Galley' }).click();
    await page.getByRole('combobox', { name: 'Equipment' }).click();
    await page.getByRole('option', { name: 'Water Bottle' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Priority' }).click();
    await page.getByRole('textbox', { name: 'Priority' }).fill('hhee');
    await page.getByRole('textbox', { name: 'Position' }).click();
    await page.getByRole('textbox', { name: 'Position' }).fill('b72 ');
    await page.getByRole('spinbutton', { name: 'Oven racks' }).click();
    await page.getByRole('spinbutton', { name: 'Oven racks' }).fill('5');
    await page.getByRole('textbox', { name: 'Notes' }).click();
    await page.getByRole('textbox', { name: 'Notes' }).fill('tested');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    await expect(page.getByRole('checkbox', { name: '1 b72 Water Bottle 1 GLz-002' })).toBeVisible();

    await page.screenshot({ path: `Screenshots/update-device-successfull.png`, fullPage: true });
});